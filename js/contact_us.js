let date = [
    { uname: '安室透', imgSrc: '../images/contact_us/头像_安室.jpeg' },
    { uname: '阿笠博士', imgSrc: '../images/contact_us/头像_博士.jpeg' },
    { uname: '灰原哀', imgSrc: '../images/contact_us/头像_灰原哀.jpeg' },
    { uname: '怪盗基德', imgSrc: '../images/contact_us/头像_基德.jpeg' },
    { uname: '柯南', imgSrc: '../images/contact_us/头像_柯南.jpeg' },
    { uname: '平次', imgSrc: '../images/contact_us/头像_平次.jpeg' },
    { uname: '毛利兰', imgSrc: '../images/contact_us/头像_小兰.jpeg' },
    { uname: '毛利小五郎', imgSrc: '../images/contact_us/头像_小五郎.jpeg' },
    { uname: '工藤新一', imgSrc: '../images/contact_us/头像_新一.jpeg' },
    { uname: '赤井秀一', imgSrc: '../images/contact_us/头像_秀一.jpeg' }
]

// 本地存储数据函数
function getLoaclData() {
    let data = localStorage.getItem('info')
    if (data) {
        return JSON.parse(data)
    } else {
        let arr = [
            { uname: '北京大学医院', imgSrc: '../images/index/bynamic_banner.jpeg', date: '2018/5/13 10:38:39', value: '[培训]宫颈癌——人类第一个可望消灭的癌症(CSCCP专家《市民演讲》预告)', zan: 50, zhuangtai: 'fa fa-thumbs-up full', zhuangtai1: 'fa fa-thumbs-o-down' },
            { uname: '安室透', imgSrc: '../images/contact_us/头像_安室.jpeg', date: '2018/5/13 10:40:23', value: '非常期待!!!', huifu: true, huifuname: '@北京大学医院', zan: 5, zhuangtai: 'fa fa-thumbs-up full', zhuangtai1: 'fa fa-thumbs-o-down' },
            { uname: '怪盗基德', imgSrc: '../images/contact_us/头像_基德.jpeg', date: '2018/5/13 8:40:23', value: '我也非常非常期待!!!', huifu: true, huifuname: '@安室透', zan: 8, zhuangtai: 'fa fa-thumbs-o-up', zhuangtai1: 'fa fa-thumbs-o-down' },
            { uname: '北京大学医院', imgSrc: '../images/index/bynamic_banner.jpeg', date: '2018/5/13 10:37:33', value: '[系统]“基于互联网的自取样宫颈癌筛查全国多中心项目”即将启动', zan: 20, zhuangtai: 'fa fa-thumbs-o-up', zhuangtai1: 'fa fa-thumbs-o-down' },
            { uname: '柯南', imgSrc: '../images/contact_us/头像_柯南.jpeg', date: '2022/8/30 17:38:07', value: '忘记密码了怎么办', zan: 8, zhuangtai: 'fa fa-thumbs-o-up', zhuangtai1: 'fa fa-thumbs-o-down' },
            { uname: '工藤新一', imgSrc: '../images/contact_us/头像_新一.jpeg', date: '2022/8/30 19:21:35', value: '凉拌炒鸡蛋！', huifu: true, huifuname: '@柯南', zan: 4, zhuangtai: 'fa fa-thumbs-o-up', zhuangtai1: 'fa fa-thumbs-down full' },
            { uname: '灰原哀', imgSrc: '../images/contact_us/头像_灰原哀.jpeg', date: '2022/8/30 15:21:35', value: '前往登录页面，找到忘记密码选项，进行重新设置密码', huifu: true, huifuname: '@柯南', zan: 10, zhuangtai: 'fa fa-thumbs-up full', zhuangtai1: 'fa fa-thumbs-o-down' },
            { uname: '柯南', imgSrc: '../images/contact_us/头像_柯南.jpeg', date: '2022/8/30 15:25:05', value: 'OK! 十分感谢', huifu: true, huifuname: '@灰原哀', zan: 1, zhuangtai: 'fa fa-thumbs-o-up', zhuangtai1: 'fa fa-thumbs-o-down' },
        ]
        localStorage.setItem('info', JSON.stringify(arr))
    }
}
getLoaclData()

// 渲染函数
let index = 0
let display = ''
let zhuangtai = ''
let infos = document.querySelector('.infos')
function render() {
    let arr = getLoaclData()
    // 先清空原有的内容
    infos.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        let div = document.createElement('div')
        if (arr[i].huifu) {
            div.className = 'info1 my-2'
            display = 'd-inline-block'
        } else {
            div.className = 'info mt-5 mb-3'
            display = 'd-none'
        }

        div.innerHTML = `
            <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                    <img src="${arr[i].imgSrc}" alt="" class="img-fluid rounded-circle float-start">
                    <h6 class="float-start ms-3 my-auto">
                        <b>${arr[i].uname}</b>
                    </h6>
                </div>
                <div>
                    <span class="text-muted" style="font-size: 13px; font-weight: 600;">${arr[i].date}</span>
                </div>
            </div>
            <p class="text-grey mt-3 mb-2 value ${display}">回复 <a href='#' class='huifucolor cur mx-1'>${arr[i].huifuname}</a> :</p>
            <p class="text-grey mt-2 value">${arr[i].value}</p>
            <p class="p text_indent mb-0" style="font-size: 14px; font-weight: bold;">
                <span class="cur me-2 a_color huifu" id='huifu' data-name='@${arr[i].uname}' data-indexs='${i + 1}'>回复评论</span>
                <span class="cur me-2 a_hover ${display}" data-uname='${arr[i].uname}' data-index='${i}' id='delete'>删除评论</span>
                <span class='zan cur me-2'><i class='${arr[i].zhuangtai}'></i><span class='ms-1 num'>${arr[i].zan}</span></span>
                <span class='cai cur'><i class='${arr[i].zhuangtai1}'></i></span>
            </p>
            `
        let deletes = div.querySelector('#delete')
        deletes.addEventListener('click', function () {
            let arr = getLoaclData()
            // if (this.dataset.uname === '北京大学医院') {
            //     alert('官方数据不允许删除')
            //     return
            // }
            arr.splice(this.dataset.index, 1)

            localStorage.setItem('info', JSON.stringify(arr))
            render()
            even()
        })

        let huifu = div.querySelector('#huifu')
        huifu.addEventListener('click', function () {
            let indexs = this.dataset.indexs
            let huifuname = this.dataset.name
            console.log(indexs)
            if (index > 0) {
                let cons = document.querySelectorAll('.controls')
                for (let i = 0; i < cons.length; i++) {
                    cons[i].remove()
                }
            }
            function getRandom(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min
            }

            let random = getRandom(0, date.length - 1)
            let div = document.createElement('div')
            div.className = 'controls my-2'
            div.innerHTML = `
            <img src="${date[random].imgSrc}" alt="" class="img-fluid rounded-circle d-none d-md-block">
            <textarea name="" cols="30" rows="10" placeholder="${this.dataset.name}" maxlength="200" id="textarea1"></textarea>
            <button id="submit1">发布</button>
            `
            index++
            let textarea1 = div.querySelector('#textarea1')
            let btn1 = div.querySelector('#submit1')
            textarea1.addEventListener('input', function () {
                btnStyle(textarea1, btn1)
            })
            textarea1.addEventListener('blur', function () {
                textBlur(textarea1)
            })
            textarea1.addEventListener('keyup', function (e) {
                if (e.key === 'Enter') {
                    btn1.click()
                }
            })
            btn1.addEventListener('click', function () {
                // 如果为文本框为空白，则拒绝发布
                if (textarea1.value.trim() === '') {
                    textarea1.value = ''
                    return
                }
                let arr = getLoaclData()
                console.log(huifu.dataset.indexs)
                arr.splice(indexs, 0, {
                    uname: date[random].uname,
                    imgSrc: date[random].imgSrc,
                    date: new Date().toLocaleString(),
                    value: textarea1.value,
                    huifu: true,
                    huifuname: huifuname,
                    zan: '',
                    zhuangtai: 'fa fa-thumbs-o-up',
                    zhuangtai1: 'fa fa-thumbs-o-down'
                })
                localStorage.setItem('info', JSON.stringify(arr))
                render()
                even()
            })

            infos.insertBefore(div, infos.children[this.dataset.indexs])
        })

        // 点赞功能和踩
        let zan = div.querySelector('.zan')
        let zanI = div.querySelector('.zan i')
        let num = div.querySelector('.zan .num')
        let num_inner = num.innerHTML
        let cai = div.querySelector('.cai')
        let caiI = div.querySelector('.cai i')
        zan.addEventListener('click', function () {
            if (!zanI.classList.contains('full')) {
                zanI.className = 'fa fa-thumbs-up full'
                num_inner++
                num.innerHTML = num_inner
                arr[i].zhuangtai = 'fa fa-thumbs-up full'
                arr[i].zan = num_inner
                console.log(arr[i])
                if (caiI.classList.contains('full')) {
                    caiI.className = 'fa fa-thumbs-o-down'
                    arr[i].zhuangtai1 = 'fa fa-thumbs-o-down'

                }
            } else {
                zanI.className = 'fa fa-thumbs-o-up'
                num_inner--
                if (num_inner == 0) {
                    num.innerHTML = ''
                    num_inner = ''
                } else {
                    num.innerHTML = num_inner
                }
                arr[i].zhuangtai = 'fa fa-thumbs-o-up'
                arr[i].zan = num_inner
            }
            localStorage.setItem('info', JSON.stringify(arr))

        })
        cai.addEventListener('click', function () {
            if (!caiI.classList.contains('full')) {
                caiI.className = 'fa fa-thumbs-down full'
                arr[i].zhuangtai1 = 'fa fa-thumbs-down full'
                arr[i].zan = num_inner
                if (zanI.classList.contains('full')) {
                    zanI.className = 'fa fa-thumbs-o-up'
                    num_inner--
                    if (num_inner == 0) {
                        num.innerHTML = ''
                        num_inner = ''
                    } else {
                        num.innerHTML = num_inner
                    }
                    num.innerHTML = num_inner
                    arr[i].zhuangtai = 'fa fa-thumbs-o-up'
                    arr[i].zan = num_inner
                }
            } else {
                caiI.className = 'fa fa-thumbs-o-down'
                arr[i].zhuangtai1 = 'fa fa-thumbs-o-down'
            }
            localStorage.setItem('info', JSON.stringify(arr))
        })

        infos.appendChild(div)
    }
}

render()
even()
// 文本框
let textarea = document.querySelector('#textarea')
let btn = document.querySelector('#submit')
textarea.addEventListener('input', function () {
    btnStyle(textarea, btn)
})
function btnStyle(text, btn) {
    if (text.value.trim() !== '') {
        btn.style.backgroundColor = '#00aeec'
    } else {
        btn.style.backgroundColor = '#80d7f6'
    }
}


textarea.addEventListener('blur', function () {
    textBlur(textarea)
})
function textBlur(textarea) {
    if (textarea.value.trim() !== '') {
        textarea.style.backgroundColor = 'transparent'
        textarea.style.border = '1px solid #dee2e6'
    } else {
        textarea.style.backgroundColor = '#f1f2f3'
        textarea.style.border = '1px solid transparent'
        textarea.value = ''
    }
}
textarea.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        btn.click()
    }
})

// 发布按钮
btn.addEventListener('click', function () {
    // 如果为文本框为空白，则拒绝发布
    if (textarea.value.trim() === '') {
        textarea.value = ''
        return
    }

    // 随机函数
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    let random = getRandom(0, date.length - 1)
    // 添加模块
    let arr = getLoaclData()
    arr.push({
        uname: date[random].uname,
        imgSrc: date[random].imgSrc,
        date: new Date().toLocaleString(),
        value: textarea.value,
        zan: '',
        zhuangtai: 'fa fa-thumbs-o-up',
        zhuangtai1: 'fa fa-thumbs-o-down'
    })
    localStorage.setItem('info', JSON.stringify(arr))
    render()
    even()

    // 重置
    textarea.value = ''
    textBlur(textarea)
    btnStyle(textarea, btn)
})

// 删除所有评论按钮
let delete_all = document.querySelector('#delete_all')
delete_all.addEventListener('click', function () {
    let arr = getLoaclData()
    arr = [
        { uname: '北京大学医院', imgSrc: '../images/index/bynamic_banner.jpeg', date: '2018/5/13 10:38:39', value: '[培训]宫颈癌——人类第一个可望消灭的癌症(CSCCP专家《市民演讲》预告)', zan: 50, zhuangtai: 'fa fa-thumbs-up full', zhuangtai1: 'fa fa-thumbs-o-down' },
        { uname: '北京大学医院', imgSrc: '../images/index/bynamic_banner.jpeg', date: '2018/5/13 10:37:33', value: '[系统]“基于互联网的自取样宫颈癌筛查全国多中心项目”即将启动', zan: 20, zhuangtai: 'fa fa-thumbs-o-up', zhuangtai1: 'fa fa-thumbs-o-down' }
    ]
    localStorage.setItem('info', JSON.stringify(arr))
    render()
    even()
})

function even() {
    let infoes = document.querySelectorAll('.info')
    for (let i = 0; i < infoes.length; i++) {
        if (i % 2 !== 0) {
            infoes[i].classList.add('even')
        }
    }
}


