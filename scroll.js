


document.addEventListener('DOMContentLoaded', function() {
    var getthecontainer = document.querySelector('#dropWrapper');
    var leftcontainer = document.querySelector('#contentsWrapper');
    var titleWrapper = document.querySelector('#titleWrapper');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY >= 180) {
         getthecontainer.classList.add('dropDownLeft'); 
        leftcontainer.append(getthecontainer);
      } else {
       getthecontainer.classList.remove('dropDownLeft'); 
       titleWrapper.append(getthecontainer);
      }
      console.log(getthecontainer.classList);
    });
  
    if (window.scrollY >= 180) {
      leftcontainer.append(getthecontainer);
      getthecontainer.classList.add('dropDownLeft');
    } else {
      titleWrapper.append(getthecontainer);
      getthecontainer.classList.remove('dropDownLeft');
    }
    console.log(getthecontainer.classList);
  }); 

  document.addEventListener('DOMContentLoaded', function() {
    var sidebarLinks = document.querySelectorAll('.tableContents ul li a');
  
    // Функция для проверки, виден ли элемент в области видимости
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Функция для выделения соответствующего заголовка в боковом меню
    function highlightSidebarLink() {
      for (var i = 0; i < sidebarLinks.length; i++) {
        var targetId = sidebarLinks[i].getAttribute('href').substring(1);
        var targetSection = document.getElementById(targetId);
        if (targetSection && isElementInViewport(targetSection)) {
          sidebarLinks[i].classList.add('highlighted');
        } else {
          sidebarLinks[i].classList.remove('highlighted');
        }
      }
    }
  
    // Вызываем функцию при прокрутке страницы
    window.addEventListener('scroll', highlightSidebarLink);
    highlightSidebarLink(); // Для инициализации при загрузке страницы
  });