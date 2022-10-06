import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import LoadingScreen from '../../components/screens/LoadingScreen';
import Txt from '../../components/ui/Txt';
import MatchCard from '../../features/matches/components/MatchCard';
import Container from '../../layout/Container';
import Content from '../../layout/Content';
import SafeArea from '../../layout/SafeArea';
import Space from '../../layout/Space';
import tw from '../../lib/tailwind';
import { getMatchesNow } from '../../services/api/match';

const AllMatchesScreen = () => {
  const [allMatches, setAllMatches] = useState<LeagueMatchesToday[] | null>(
    null
  );

  const loadAllMatches = async () => {
    const matches = await getMatchesNow();
    setAllMatches(matches);
  };

  useEffect(() => {
    loadAllMatches();
  }, []);

  if (!allMatches) return <LoadingScreen />;

  return (
    <SafeArea>
      <Content>
        <Space />
        <Txt style={tw`font-extrabold text-5xl`}>Today</Txt>
        {allMatches.map((l) => (
          <FlatList
            key={l.league}
            data={l.matches}
            renderItem={({ item: m, index }) => {
              return (
                <Container key={index}>
                  <MatchCard
                    homeTeam={m.homeTeam}
                    awayTeam={m.awayTeam}
                    league={l.league}
                    score={m.score}
                    utcDate={m.utcDate}
                  />
                  <Space />
                </Container>
              );
            }}
          />
        ))}
      </Content>
    </SafeArea>
  );
};

export default AllMatchesScreen;
