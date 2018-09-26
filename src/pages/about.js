import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Container = styled.div`
  display: flex
  justify-content: space-between
  align-items: center
  flex-flow: row wrap
`

const AboutMe = styled.div`
  min-width: 400px
  max-width: 500px
  flex: 1
  margin: 0 auto
  padding: 2rem
  text-align: left
`

const ImageContainer = styled.div`
  flex: 1
  min-width: 400px
  width: 50vw
  max-width: 700px
  margin: 0 auto
  padding: 2rem
`

const About = ({ data }) => {
  return (
    <Container>
      <ImageContainer>
        <Img
          sizes={data.aboutImage.sizes}
        />
      </ImageContainer>
      <AboutMe>
        {`"I guess you could say Selformative is my passion project"`}
      </AboutMe>
      <div style={{ display: 'block', padding: '2rem' }}>
        <p>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, sem posuere tempus pulvinar, mauris purus suscipit sapien, a interdum est ante tempus lorem. Cras in lacinia justo. Sed cursus viverra ante quis vulputate. Quisque pharetra pretium libero, vitae egestas mauris consequat non. Vivamus sodales quis dolor et aliquam. Vestibulum at sollicitudin turpis, vel dapibus lectus. Nulla pretium nibh nec leo molestie gravida. Donec ultricies bibendum velit ut euismod.

In suscipit leo ante, eu gravida est dictum in. Ut sed ultricies purus, a tempor nisl. Sed commodo placerat tortor, nec dignissim felis pharetra eu. Praesent sit amet justo dapibus, suscipit libero nec, dignissim arcu. Donec posuere, leo eu cursus hendrerit, nulla libero pellentesque dui, ac aliquam neque mauris varius elit. Maecenas libero odio, vestibulum vitae purus vitae, rutrum dignissim nibh. Duis gravida orci id lectus venenatis cursus. Curabitur iaculis, dui iaculis aliquam congue, nunc purus scelerisque nunc, sollicitudin suscipit magna ex quis nunc. Maecenas tincidunt purus dignissim mollis tempus. Morbi sodales nunc tortor, id dictum sapien consectetur non. Nunc placerat felis sit amet leo malesuada, ac imperdiet dolor aliquam.

Proin rutrum leo tellus, ac sagittis nisl blandit at. In velit lorem, faucibus id tristique eget, tincidunt a eros. Curabitur efficitur ultricies elit, id tincidunt leo tincidunt a. Curabitur sit amet massa eget ante porttitor suscipit. Nunc ligula mauris, dictum quis est nec, ullamcorper rhoncus ex. Duis consectetur accumsan feugiat. Phasellus venenatis faucibus elit et venenatis. Nam id diam velit. Pellentesque elementum felis diam, a pharetra turpis feugiat ut. Pellentesque commodo ut eros ut ullamcorper.

Vestibulum orci ante, porttitor sit amet rhoncus et, pellentesque ut elit. Donec a nibh id est tempus condimentum ut at diam. Sed eget fermentum justo. Vestibulum congue a arcu non semper. Aliquam tincidunt congue velit. Aenean hendrerit tempus consequat. Nullam id faucibus magna. Quisque vehicula sapien eros, sed blandit odio dapibus eget. Praesent fermentum felis sed ante bibendum posuere. Etiam vehicula urna et nibh lacinia, nec molestie metus molestie. Sed quis quam risus. Fusce dolor risus, finibus id consequat non, maximus eget ipsum.

Aliquam vel gravida neque. Mauris at nulla sed neque feugiat bibendum. Sed eleifend erat eu magna eleifend, vel commodo lorem lacinia. Curabitur lacus libero, bibendum eu diam nec, aliquam posuere augue. Cras venenatis nibh neque, et posuere tellus gravida ut. Donec sit amet placerat augue. Phasellus laoreet et felis vitae semper. Vivamus ut hendrerit sapien. Nulla ut velit volutpat, volutpat tellus quis, iaculis sem.

Pellentesque scelerisque ipsum justo, vel tempus sapien dapibus non. Sed eget elit in enim luctus sagittis eget egestas enim. Pellentesque dictum ornare orci, nec suscipit ante finibus in. Duis molestie nec ipsum at aliquam. Etiam in sapien ex. Suspendisse tortor sem, tincidunt quis lacus in, efficitur vestibulum turpis. Morbi non rhoncus risus. Quisque nunc risus, consectetur ac nisi venenatis, tempus luctus massa. Aliquam hendrerit eros vitae nulla mollis gravida. Pellentesque vel est mauris. Aliquam ex nisl, ullamcorper ut massa vel, bibendum suscipit dui.

Nam quis justo ac orci feugiat consequat. Suspendisse semper ut ante non rhoncus. Nullam sed vehicula nunc. Aliquam ac sem ac ligula ultricies pharetra non in velit. Phasellus vehicula rutrum sem, id aliquet odio ultrices et. Donec rhoncus nec diam molestie cursus. Aliquam erat volutpat. Proin iaculis metus ut molestie finibus. Phasellus tortor nulla, facilisis ut faucibus id, finibus dapibus leo. Curabitur a leo a urna malesuada porta sed vel elit. Aenean dictum odio nec est consequat, ut lobortis metus maximus.

Cras auctor ligula velit, ac scelerisque purus malesuada eu. Ut commodo vitae ligula eu commodo. Nullam mollis quis orci sit amet pretium. Integer ut lectus sem. Proin vel ipsum mauris. Integer blandit feugiat turpis, et eleifend nibh mollis quis. Cras lacinia, urna non condimentum semper, elit lectus molestie sem, vitae imperdiet felis mauris nec urna. Proin eget tellus efficitur, consequat quam vel, congue nulla. Aliquam a porttitor urna. Mauris quam magna, pulvinar ut elit sit amet, suscipit eleifend tellus. Pellentesque tristique auctor purus, sit amet finibus justo finibus sed. Integer lacinia malesuada neque, eget cursus dui imperdiet ut. In mollis aliquet varius.

Pellentesque a tempor justo. Praesent dapibus rhoncus suscipit. Praesent cursus eget enim sit amet blandit. Praesent blandit, massa viverra venenatis convallis, metus nisl maximus diam, et finibus nisl nisi vitae ante. Suspendisse tristique in magna ac dignissim. Curabitur vitae lacinia urna, vitae sollicitudin urna. Donec mauris quam, cursus sed purus eget, laoreet laoreet erat. Sed quis vulputate sapien. Donec in tellus nec magna feugiat bibendum. Proin commodo arcu nec semper sodales.

In ullamcorper, nunc at tempor pellentesque, neque nibh accumsan lectus, ac malesuada est ex eget purus. Curabitur sapien tellus, cursus volutpat tortor in, interdum posuere nibh. Pellentesque eget turpis vitae nisi elementum mattis in sit amet turpis. Vestibulum lectus lorem, tincidunt sed porttitor at, aliquet id risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam fringilla ante vel turpis lacinia, at dictum elit laoreet. Pellentesque a scelerisque odio. Mauris lacus diam, faucibus ut fringilla nec, maximus sit amet sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer sapien eros, sagittis sed diam facilisis, laoreet tincidunt dui. Phasellus laoreet vulputate augue, eu consequat sem lobortis pharetra.`}
        </p>
      </div>
    </Container>
  )
}

export default About

export const query = graphql`
  query AboutPageQuery {
    aboutImage: imageSharp(id: { regex: "/about/" }) {
      sizes(maxWidth: 800) {
          ...GatsbyImageSharpSizes
      }
    }
  }
`
