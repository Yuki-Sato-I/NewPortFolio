import React, { useEffect, useState } from 'react';
import axios from 'axios';
// common
import CommonStyle from '../../common/CommonStyle';
// atoms
import Image, { ImageThemes } from '../atoms/Image';
import SubTitle from '../atoms/SubTitle';
import Text, { TextThemes } from '../atoms/Text';
import { GitHub, Facebook, Twitter, Instagram } from 'react-feather';

interface ProfileProps {
}

const Profile: React.FC<ProfileProps> = ({ }) => {
  const [artist, setArtist] = useState('取得に失敗');
  const [name, setName] = useState('取得に失敗');
  const [key, setKey] = useState(process.env.REACT_APP_ACCESS_KEY);

  const fetch = async () => {
    await axios
    .get(process.env.REACT_APP_SPOTIFY_ENDPOINT! + '/v1/me/player/recently-played', {
      headers: {
        Authorization: `Bearer ${key}`,
      }
    })
    .then(res => {
      setArtist(res.data.items[0].track.artists[0].name);
      setName(res.data.items[0].track.name);
    })
    .catch(err => {
      if(err.response && err.response.status === 401){
        refresh();
      }
      console.log(err);
    });
  }

  const refresh = async () => {
    var params = new URLSearchParams();
    params.append('client_id', process.env.REACT_APP_SPOTIFY_CLIENT_ID!);
    params.append('client_secret', process.env.REACT_APP_SPOTIFY_SECRET_ID!);
    params.append('refresh_token', process.env.REACT_APP_REFRESH_TOKEN!);
    params.append('grant_type', 'refresh_token');
    await axios
    .post(process.env.REACT_APP_SPOTIFY_ACCOUNT_ENDPOINT! + '/api/token', params)
    .then(res => {
      setKey(res.data.access_token);
    })
  }

  useEffect(()=> {
    fetch();
  }, [key])

  return (
    <div className="profile-wrapper">
      <div className="profile-image">
        <Image 
          src='./images/profile001.png'
          theme={[ImageThemes.PROFILE]}
          height={250}
          width={250}
          propStyle={{ borderRadius: '50%', border: `10px solid ${CommonStyle.BorderColor}` }}
        />
      </div>
      <div className="profile-text profile-section">
        <SubTitle>Name</SubTitle>
        <Text theme={[TextThemes.PROFILE]}>Yuki Sato</Text>
        <SubTitle>Age</SubTitle>
        <Text theme={[TextThemes.PROFILE]}>22</Text>
        <SubTitle>Occupation</SubTitle>
        <Text theme={[TextThemes.PROFILE]}>University Student / Engineer</Text>
      </div>
      <div className="profile-section">
        <SubTitle>Profile</SubTitle>
        <Text theme={[TextThemes.PROFILE]}>現在地方の大学3年。あることがきっかけでプログラミングを勉強し始める。初心者なので初心者がひっかりやすいものを主に投稿したい。sample</Text>
      </div>
      <div className="profile-section">
        <div className="sub">
          <SubTitle>各種アカウント</SubTitle>
          <a href="https://github.com/Yuki-Sato-I" target="_blank" rel="noopener noreferrer">
            <GitHub size={30} />
          </a>
          <a href="https://www.instagram.com/yuyusayuyu/?hl=ja" target="_blank" rel="noopener noreferrer">
            <Instagram size={30} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100008097306849" target="_blank" rel="noopener noreferrer">
            <Facebook size={30} />
          </a>
          <a href="https://twitter.com/mij9992587" target="_blank" rel="noopener noreferrer">
            <Twitter size={30} />
          </a>
        </div>
        <div className="sub">
          <SubTitle>最後に聴いた曲</SubTitle>
          <Image
            src='./images/spotify.png'
            theme={[ImageThemes.PROFILE]}
            height={50}
            width={50}
            propStyle={{ borderRadius: '50%', height: '50px', verticalAlign: 'top' }}
          />
          <div className="song-wrapper">
            <Text propStyle={{fontSize: '1.4rem', fontWeight: '500', marginBottom: '8px'}}>{name}</Text>
            <Text propStyle={{fontSize: '0.9rem'}}>{artist}</Text>
          </div>
        </div>
      </div>
      <style jsx>{`
        .profile-wrapper {
          margin-bottom: 64px;
        }

        .profile-image {
          display: inline-block;
        }
        .profile-text {
          padding: 0 64px;
          display: inline-block;
          width: calc(100% - 400px);
          vertical-align: top;
        }

        .sub {
          display: inline-block;
          width: 50%;
          vertical-align: top;
        }

        .profile-section {
          margin-bottom: 16px;
        }

        .profile-section a {
          display: inline-block;
          color: ${CommonStyle.TextColor};
          margin-left: 12px;
        }

        .song-wrapper {
          max-width: 300px;
          display: inline-block;
          padding-left: 24px;
          vertical-align: 4px;
        }

        @media only screen and (max-width: 1024px) {
          .profile-image {
            display: block;
            text-align: center;
          }
          .profile-text {
            display: block;
            width: 100%;
            margin: 0 auto;
            padding: 0;
          }
          .song-wrapper {
            width: calc(100% - 100px);
          }
        }
        @media only screen and (max-width: 605px) {
          .sub {
            display: block;
            width: 100%;
            margin-bottom: 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default Profile;