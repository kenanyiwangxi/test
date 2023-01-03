// header anniu
let bars = document.querySelector('.bars')
let flag = true
bars.addEventListener('click', makeBars)
function makeBars() {
    if (flag) {
        flag = false
        bars.classList.toggle('active')
        setTimeout(function () { flag = true }, 350)
    }
}

// dropdown anniu
let dropdown = document.querySelectorAll('#header .dropdown .nav-link')
let dropIs = document.querySelectorAll('#header .drop-i')
for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', function (e) {
        e.preventDefault()
        dropIs[i].classList.toggle('active')
    })

    dropdown[i].addEventListener('blur', function () {
        dropIs[i].classList.remove('active')
    })
}

// 返回顶部
let radio = document.querySelector('.radio')
document.addEventListener('scroll', goTop)
function goTop() {
    let scroll = window.pageYOffset
    if (scroll >= '200') {
        radio.classList.add('show')
    } else {
        radio.classList.remove('show')
    }
}
goTop()

// 刷新滚动到页面顶部
if(history.scrollRestoration) {
    history.scrollRestoration = 'manual'
}

// 改变按钮disabled
function changeDis() {
    let btn = document.querySelector('#btn')
    let check = document.querySelector('#check')
    check.addEventListener('change', checkBool)
    function checkBool() {
        if (check.checked) {
            btn.disabled = false
        } else {
            btn.disabled = true
        }
    }
    checkBool()
}

// 申请筛查点击跳转网页
function aHref() {
    let a = document.querySelector('#aHref')
    let aInfo = document.querySelector('#a_info')
    // 筛查
    a.addEventListener('click', function () {
        let index = this.dataset.index
        let title = this.dataset.title
        let screenData = {
            index: index,
            title: title
        }
        localStorage.setItem('screenData', JSON.stringify(screenData))
    })
    // 知情同意书
    aInfo.addEventListener('click', function (e) {
        let href = this.dataset.href
        let index = this.dataset.index
        let returnHref = {
            index: index,
            href: href
        }
        localStorage.setItem('returnHref', JSON.stringify(returnHref))
    })
}

// 筛查者须知更换标题
function replaceTitle() {
    let screeningTitle = document.querySelector('#screening_title')
    let screeningTitle1 = document.querySelector('#screening_title1')
    let screenObj = JSON.parse(localStorage.getItem('screenData'))
    // 删除原有active
    onNav()
    screeningTitle.innerHTML = screenObj.title
    screeningTitle1.innerHTML = `<b>${screenObj.title}</b>`
}

// 导航栏筛查项目选中
function onNav() {
    let item = document.querySelectorAll('#header .Screening .dropdown-item')
    let screenObj = JSON.parse(localStorage.getItem('screenData'))
    // 删除原有active
    document.querySelector('#header .Screening .dropdown-item.active').classList.remove('active')
    item[screenObj.index].classList.add('active')
}

// 知情同意书跳转
function returnPage() {
    let return0 = document.querySelector('#return')
    let return1 = document.querySelector('#return1')
    let item = document.querySelectorAll('#header .Screening .dropdown-item')
    let href = JSON.parse(localStorage.getItem('returnHref'))
    // 删除原有active
    document.querySelector('#header .Screening .dropdown-item.active').classList.remove('active')
    item[href.index].classList.add('active')
    return0.href = return1.href = href.href
}