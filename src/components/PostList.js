import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Murilo Cicolin",
          avatar: "https://avatars3.githubusercontent.com/u/49662901?s=400&u=e52214f21bdd3fde655087aaff2bdc55649b29d3&v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Murilo Cicolin",
          avatar: "https://avatars3.githubusercontent.com/u/49662901?s=400&u=e52214f21bdd3fde655087aaff2bdc55649b29d3&v=4"
        },
        date: "04 Jun 2019",
        content: "Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Bill Gates",
              avatar: "https://media-exp1.licdn.com/dms/image/C5603AQHv9IK9Ts0dFA/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=HfJCBTDmB6kYPaLm_v2e5vT3qwJn1GI4peLjEoqG7GE"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 2,
            author: {
              name: "Steve Jobs",
              avatar: "data:image/jpeg;base64,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"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          }
        ]
      }
    ]
  }

  render() {
    const { posts } = this.state;
    return (
      <>
        {posts.map(post => < Post key={post.id} data={post} />)}
      </>
    )
  }
}

export default PostList;