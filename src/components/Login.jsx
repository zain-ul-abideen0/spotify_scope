import React from 'react'
import styled from "styled-components"

export default function Login() {
  const handleClick=()=>{
    const clientId="fb8022ca86ab4a719a2805987b4e0373";
    const redirectUrl="http://localhost:5173/"
    const apiUrl="https://acconts.spotify.com/authorize"
    const scope=[
      "user-read-email",
      "user-read-private",
      'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing'
    ,'user-read-playback-position',
    'user-top-read',
   ' user-read-recently-played']
   window.location.href=`${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}?scope=${scope.
  join("")}&response_type=token&show_dialog=true`;

  };
  return (
    <Container>
    
    <button onClick={handleClick}>connect spotify</button>
    </Container>
  )
}
const Container=styled.div``;

