import icons from 'url:../../img/icons.svg';
import View from './View.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'We could not find that recipe. Please try again!';
  _message = '';

  _generateMarkup() {
    console.log(this._data);
    return this._data.map(this._generateMarkupPreview).join(''); //we use map() and join() bcoz the data is returned in the form of an array and that array should be converted into a big string by join() method.
  }

  _generateMarkupPreview(result) {
    return `
    <li class="preview">
      <a class="preview__link" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="${result.title}" />
          </figure>
         <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
         </div>
      </a>
    </li>
    `;
  }
}

export default new ResultsView();
