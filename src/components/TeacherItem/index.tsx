import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

 function TeacherItem() {
    return (
        <article className="teacher-item">
                 <header>
                    <img src="https://avatars0.githubusercontent.com/u/22276403?s=460&u=be338ed330d0c844a8e218010b2ac1d93b0b72b5&v=4" alt="Fernanda Gonçalves"/>
                    <div>
                        <strong>Fernanda Gonçalves</strong>
                        <span>Algoritmos</span>
                    </div>
                 </header>

                 <p>
                    Is simply dummy text of the printing and typesetting industry.
                    <br />  <br />
                    
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                 </p>

                 <footer>
                     <p>
                         Preço/hora
                         <strong>R$ 50,00</strong>
                     </p>
                     <button type="button">
                         <img src={whatsappIcon} alt="Whatsapp"/>
                         Entrar em contato.
                     </button>
                 </footer>
        </article>
    )
}

export default TeacherItem;