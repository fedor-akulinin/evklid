const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    a11y: {
        paginationBulletMessage: 'Переход к слайду {{index}}'
    },
    pagination: {
    el: '.swiper-pagination',
    clickable: true
    },
    })
    

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.item-steps__btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.work-tabs').forEach(function (tabsContent) {
                tabsContent.classList.remove('tabs-item--active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active')
        })
    })
    document.querySelectorAll('.item-steps__btn').forEach(function(tabsColor) {
        tabsColor.addEventListener('click', function(ev) {
            const path1 = ev.currentTarget.dataset.path1
            document.querySelectorAll('.item-steps__btn').forEach(function (tabsColorChange) {
                tabsColorChange.classList.remove('tabs-item-color')
            })
            document.querySelector(`[data-path1="${path1}"]`).classList.add('tabs-item-color')
        })
    })
})


$( function() {
    $( ".accordion" ).accordion({
       icons: false,
       heightStyle: "content",
       collapsible: true,
       active: false
     })
      
   } )

window.addEventListener('DOMContentLoaded',function() {
    document.querySelector('.burger').addEventListener('click', function () {
        document.querySelector('#header__left').classList.toggle('is-active')
        })
    document.querySelector('#btn').addEventListener('click', function () {
        document.querySelector('#header__left').classList.remove('is-active')
    })
    document.querySelector('.header-btn').addEventListener('click', function () {
        document.querySelector('#header-srch').classList.toggle('searching')
        document.querySelector('#nav').classList.toggle('close')
        document.querySelector('#header-btn').classList.toggle('close')
        document.querySelector('#logo').classList.toggle('close')

    })
    document.querySelector('#search-close').addEventListener('click', function (){
        document.querySelector('#header-srch').classList.remove('searching')
        document.querySelector('#nav').classList.remove('close')
        document.querySelector('#header-btn').classList.remove('close')
        document.querySelector('#logo').classList.remove('close')
    })
})   
