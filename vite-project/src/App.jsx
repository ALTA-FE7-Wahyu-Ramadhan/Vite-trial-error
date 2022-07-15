import React, { Component } from "react";
// import reactLogo from './assets/react.svg'
// import './App.css'
// import Header from './components/Header'
// import Layout from './components/Layout'

export default class App extends Component() {
  // const [count, setCount] = useState(0)

  // constructor
  state = {
    title: "-",
    content: "This is the home page",
    page: 1,
    datas: [
      {
        id: 1,
        title: "Wandavision Season 1",
        image:
          "https://cdn.europosters.eu/image/750/posters/wandavision-reality-rift-i106807.jpg",
      },
      {
        id: 2,
        title: "Wandavision Season 2",
        image:
          "https://image.tmdb.org/t/p/original/glKDfE6btIRcVB5zrjspRIs4r52.jpg",
      },
      {
        id: 3,
        title: "Wandavision Season 3",
        image:
          "https://cdn.europosters.eu/image/750/posters/wandavision-reality-rift-i106807.jpg",
      },
      {
        id: 4,
        title: "Wandavision Season 4 Wandavision Season 4 Wandavision Season 4",
        image:
          "https://cdn.europosters.eu/image/750/posters/wandavision-reality-rift-i106807.jpg",
      },
      {
        id: 5,
        title: "Wandavision Season 5",
        image:
          "https://image.tmdb.org/t/p/original/glKDfE6btIRcVB5zrjspRIs4r52.jpg",
      },
      {
        id: 6,
        title: "Wandavision Season 6",
        image:
          "https://cdn.europosters.eu/image/750/posters/wandavision-reality-rift-i106807.jpg",
      },
    ],
    information: {},
    loading: false,
  };

  render() {return (
    <div>
    {/* <Layout> */}
      <div className="bg-blue-500">Sedang Belajar</div>
    {/* </Layout> */}
    </div>
  )
}
}

// export default App
