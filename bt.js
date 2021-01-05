class info extends HTMLElement {
    constructor() {
        super()
        this._shadowDom = this.attachShadow({ mode: 'open' })
        this.name = this.getAttribute('name')
        this.job = this.getAttribute('job');
        this.age = this.getAttribute('age');
        this.id = this.getAttribute('id');
        this.img = this.getAttribute('img');
        this._shadowDom.innerHTML = `
    <style>

      .a{
        margin-bottom: 50px;
        object-fit: cover;
        width: 280px;
        border: 2px solid black;
      }
      .pic img{
        width: 280px;
        height: 200px;
      }
      .name{
        margin-left: 10px;
      }
      .b{
        margin-left:20px;
      }
    </style>
    
    <div class="a">
      <div class="pic">
        <img src="${this.img}" alt="picture">
      </div>
      <div class="name">
        <h1>${this.name}</h1>
      </div>
      <div class="b">
          <p>tuổi: ${this.age}</p>
          <p>nghề: ${this.job}</p>
          <p>id: ${this.id}</p>
      </div>
  </div>`
    }

}

window.customElements.define('info-1', info)