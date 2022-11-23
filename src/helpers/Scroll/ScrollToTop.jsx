import React, { Component } from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { ScrollBtn } from './ScrollToTop.styled';

export default class ScrollToTop extends Component {
  state = {
    isScroll: false,
  };

  scrollBy() {
    const { height: cardHeight } = document
      .querySelector('#gallery')
      .firstElementChild.getBoundingClientRect();

    return window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }

  scrollToTop() {
    const start = document.querySelector('#header');
    return window.scrollTo({ top: start, behavior: 'smooth' });
  }

  render() {
    return (
      <ScrollBtn type="button" aria-label="Arrow up" onClick={this.scrollToTop}>
        <BsArrowUpCircleFill size={30} />
      </ScrollBtn>
    );
  }
}
