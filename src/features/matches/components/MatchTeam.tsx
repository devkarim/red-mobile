import { Image } from 'react-native';
import { SvgUri } from 'react-native-svg';
import Txt from '../../../components/ui/Txt';
import Container from '../../../layout/Container';
import tw from '../../../lib/tailwind';

interface MatchTeamProps {
  imgUrl: string;
  name: string;
}

const MatchTeam: React.FC<MatchTeamProps> = ({ imgUrl, name }) => {
  const isSvg = imgUrl.split('.').pop() == 'svg';

  return (
    <Container style={tw`items-center w-[40%]`}>
      {!isSvg && <Image source={{ uri: imgUrl }} style={tw`w-12 h-12 mb-2`} />}
      {isSvg && <SvgUri uri={imgUrl} width={64} height={64} style={tw`mb-2`} />}
      <Txt style={tw`font-bold text-xs`}>{name}</Txt>
    </Container>
  );
};

export default MatchTeam;
