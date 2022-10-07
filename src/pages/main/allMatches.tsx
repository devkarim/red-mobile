import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import LoadingScreen from '../../components/screens/LoadingScreen';
import Txt from '../../components/ui/Txt';
import MatchCard from '../../features/matches/components/MatchCard';
import parseMatchesRes from '../../helpers/parsers/parseMatches';
import { dateToISO, debug } from '../../helpers/utils';
import Container from '../../layout/Container';
import Content from '../../layout/Content';
import SafeArea from '../../layout/SafeArea';
import Space from '../../layout/Space';
import tw from '../../lib/tailwind';
import { getMatchesNow } from '../../services/api/match';

const AllMatchesScreen = () => {
  const [allMatches, setAllMatches] = useState<DateMatches | null>(null);

  const loadAllMatches = async () => {
    const matches = await getMatchesNow();
    debug('MatchesRes', matches);
    setAllMatches(parseMatchesRes(matches));
    debug('ParsedMatchesRes', parseMatchesRes(matches));
  };

  useEffect(() => {
    loadAllMatches();
  }, []);

  if (!allMatches) return <LoadingScreen />;

  return (
    <SafeArea>
      <Content>
        <Space />
        {Object.keys(allMatches).map((d) => {
          const matches = allMatches[d];
          const todayISO = dateToISO(new Date());
          const isToday = todayISO == d;

          return (
            <FlatList
              key={d}
              data={matches}
              renderItem={({ item: m, index }) => {
                return (
                  <Container key={index}>
                    <Txt style={tw`font-extrabold text-3xl`}>
                      {isToday ? 'Today' : d}
                    </Txt>
                    <Space />
                    <MatchCard
                      homeTeam={m.homeTeam}
                      awayTeam={m.awayTeam}
                      league={m.competition.name}
                      score={m.score}
                      utcDate={m.utcDate}
                    />
                    <Space />
                  </Container>
                );
              }}
            />
          );
        })}
      </Content>
    </SafeArea>
  );
};

export default AllMatchesScreen;
