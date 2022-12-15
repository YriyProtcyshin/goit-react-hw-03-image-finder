import { Component } from 'react';
import { ImageGalery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

const API = 'https://pixabay.com/api/?key=30615642-0c3410a518698d6d783d2cae0';
export class App extends Component {
  state = {
    items: [],
    isLoding: false,
    input: '',
  };

  componentDidMount() {
    this.setState({ isLoding: true });
    fetch(API)
      .then(res => res.json())
      .then(resonse =>
        this.setState({
          items: resonse.hits,
        })
      )
      .finally(this.setState({ isLoding: false }));
  }

  onSubmit = test => {
    this.setState({ input: test });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGalery items={this.state.items} />
      </div>
    );
  }
}
