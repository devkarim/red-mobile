import React from 'react';
import { FlatList } from 'react-native';
import Txt from '../../components/ui/Txt';
import ALL_MATCHES_DUMMY from '../../dummy/matches';
import MatchCard from '../../features/matches/components/MatchCard';
import Container from '../../layout/Container';
import Content from '../../layout/Content';
import SafeArea from '../../layout/SafeArea';
import Space from '../../layout/Space';
import tw from '../../lib/tailwind';

const AllMatchesScreen = () => {
  return (
    <SafeArea>
      <Content>
        <Txt style={tw`font-extrabold text-5xl`}>Today</Txt>
        <Space />
        {ALL_MATCHES_DUMMY.map((l) => (
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
