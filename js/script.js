document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('open-search-form').addEventListener ('click', (e) => {
    document.getElementById('search-form').classList.add('search-form_show')
  })

//   document.getElementById('open-search-form').addEventListener ('click', (e) => {
//     document.getElementById('search-form').classList.remove('search-form_show')
// })

// поисковик

document.getElementById('search-form').addEventListener('submit', (e) => {
  e.preventDefault()
  });




  // modal

  document.getElementById('open-modal').addEventListener('click', (e) => {
    document.getElementById('modal-form').classList.add('open-modal_show')
  })

  document.getElementById('close-modal-form').addEventListener('click', (e) => {
    document.getElementById('modal-form').classList.remove('open-modal_show')
  })

  document.getElementById('modal-form').addEventListener('submit', (e) => {
    e.preventDefault()
  });


const selector = document.querySelector(".choices")  
  const choices = new Choices(selector, {
   searchEnabled: false,
   classNames: {
     containerOuter: 'choices header_choices',
    },
 });
 

 








// свайпер 


let swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  slidesPerGroup: 4,

  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },

  loop: true,
  spaceBetween: 30,
});

// валидатор

new window.JustValidate('.js-form', {
    colorWrong: '#D52B1E',
    rules: {
        name: {
            required: true,
        },
        email: {
            required: true,
            email: true
        },
        login: {
           required: true,
        }
    },

    messages: {
        email: {
            required: "Вы не ввели e-mail"
        },
        name: {
            required: "Вы не ввели имя"
        },
        login: {
          required: "Вы не ввели логин"
      },
      password: {
        required: "Вы не ввели пароль"
    },

}
});

new window.JustValidate('.js-forms', {
  colorWrong: '#D52B1E',
  rules: {
    comments: {
      required: true,
  },
      name: {
          required: true,
      },
      email: {
          required: true,
          email: true
      },
      login: {
         required: true,
      }
  },

  messages: {
    comments: {
      required: "Вы не ввели текст"
  },
      email: {
          required: "Вы не ввели e-mail"
      },
      name: {
          required: "Вы не ввели имя"
      },
      login: {
        required: "Вы не ввели логин"
    },
    password: {
      required: "Вы не ввели пароль"
  },

}
});

// аккордеон

let acc = new Accordion('.guests-list', {
  duration: 700,
  elementClass: 'guest-item',
  triggerClass: 'guest-btn-top',
  panelClass: 'guest-btn-bottom',
  showMultiple: false,
  openOnInit: [0],
    collapse: false
});

// табы

let tabsBtn = document.querySelectorAll('.tab-nav__btn');
let tabsItem = document.querySelectorAll('.tab-item');

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tab-nav__btn--active')});
    e.currentTarget.classList.add('tab-nav__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tab-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tab-item--active');
  });
});

})
