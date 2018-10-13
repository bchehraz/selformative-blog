import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Container = styled.div`
  display: flex
  justify-content: space-between
  align-items: center
  flex-flow: row wrap
`;

const AboutMe = styled.div`
  min-width: 400px
  max-width: 500px
  flex: 1
  margin: 0 auto
  padding: 2rem
  text-align: left
`;

const ImageContainer = styled.div`
  flex: 1
  min-width: 400px
  width: 50vw
  max-width: 700px
  margin: 0 auto
  padding: 2rem
`;

const About = ({ data }) => (
  <Container>
    <ImageContainer>
      <Img
        sizes={data.aboutImage.sizes}
      />
    </ImageContainer>
    <AboutMe>
      I guess you could say Selformative is my passion project
    </AboutMe>
    <div style={{ display: 'block', padding: '2rem' }}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellent
        esque placerat, sem posuere tempus pulvinar, mauris purus suscipit sa
        pien, a interdum est ante tempus lorem. Cras in lacinia justo. Sed cur
        sus viverra ante quis vulputate. Quisque pharetra pretium libero, vit
        ae egestas mauris consequat non. Vivamus sodales quis dolor et aliquam
        . Vestibulum at sollicitudin turpis, vel dapibus lectus. Nulla pretium
         nibh nec leo molestie gravida. Donec ultricies bibendum velit ut euismod.

In suscipit leo ante, eu gravida est dictum in. Ut sed ultricies purus, a te
mpor nisl. Sed commodo placerat tortor, nec dignissim felis pharetra eu. Pra
esent sit amet justo dapibus, suscipit libero nec, dignissim arcu. Donec po
suere, leo eu cursus hendrerit, nulla libero pellentesque dui, ac aliquam n
eque mauris varius elit. Maecenas libero odio, vestibulum vitae purus vitae
, rutrum dignissim nibh. Duis gravida orci id lectus venenatis cursus. Cura
bitur iaculis, dui iaculis aliquam congue, nunc purus scelerisque nunc, sol
licitudin suscipit magna ex quis nunc. Maecenas tincidunt purus dignissim mo
llis tempus. Morbi sodales nunc tortor, id dictum sapien consectetur non. Nu
nc placerat felis sit amet leo malesuada, ac imperdiet dolor aliquam.

Proin rutrum leo tellus, ac sagittis nisl blandit at. In velit lorem, faucib
us id tristique eget, tincidunt a eros. Curabitur efficitur ultricies elit,
id tincidunt leo tincidunt a. Curabitur sit amet massa eget ante porttitor su
scipit. Nunc ligula mauris, dictum quis est nec, ullamcorper rhoncus ex. Dui
s consectetur accumsan feugiat. Phasellus venenatis faucibus elit et venenati
s. Nam id diam velit. Pellentesque elementum felis diam, a pharetra turpis fe
ugiat ut. Pellentesque commodo ut eros ut ullamcorper.

Vestibulum orci ante, porttitor sit amet rhoncus et, pellentesque ut elit. Done
c a nibh id est tempus condimentum ut at diam. Sed eget fermentum justo. Vestib
ulum congue a arcu non semper. Aliquam tincidunt congue velit. Aenean hendrerit
 tempus consequat. Nullam id faucibus magna. Quisque vehicula sapien eros, sed
  blandit odio dapibus eget. Praesent fermentum felis sed ante bibendum posuere
  . Etiam vehicula urna et nibh lacinia, nec molestie metus molestie. Sed quis
  quam risus. Fusce dolor risus, finibus id consequat non, maximus eget ipsum.

Aliquam vel gravida neque. Mauris at nulla sed neque feugiat bibendum. Sed eleife
nd erat eu magna eleifend, vel commodo lorem lacinia. Curabitur lacus libero,
bibendum eu diam nec, aliquam posuere augue. Cras venenatis nibh neque, et posue
re tellus gravida ut. Donec sit amet placerat augue. Phasellus laoreet et felis
vitae semper. Vivamus ut hendrerit sapien. Nulla ut velit volutpat, volutpat
tellus quis, iaculis sem.

Pellentesque scelerisque ipsum justo, vel tempus sapien dapibus non. Sed eget eli
t in enim luctus sagittis eget egestas enim. Pellentesque dictum ornare orci,
nec suscipit ante finibus in. Duis molestie nec ipsum at aliquam. Etiam in sapien
ex. Suspendisse tortor sem, tincidunt quis lacus in, efficitur vestibulum turpis.
Morbi non rhoncus risus. Quisque nunc risus, consectetur ac nisi venenatis,
tempus luctus massa. Aliquam hendrerit eros vitae nulla mollis gravida.
Pellentesque vel est mauris. Aliquam ex nisl, ullamcorper ut massa vel,
bibendum suscipit dui.
      </p>
    </div>
  </Container>
);

export default About;

export const query = graphql`
  query AboutPageQuery {
    aboutImage: imageSharp(id: { regex: "/about/" }) {
      sizes(maxWidth: 800) {
          ...GatsbyImageSharpSizes
      }
    }
  }
`;
