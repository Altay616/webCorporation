<template>
    <div class="container">
        <header>
            <div class="logo">吐鲁番科技</div>
            <nav>
                <i class="fa fa-search"></i>
                <a href="#home">首页</a>
                <a href="#about-us">关于我们</a>
                <a href="#showcases">成功案例</a>
                <a href="#service">服务流程</a>
                <a href="#team-intro">团队介绍</a>
                <a href="#company-activities">公司动态</a>

            </nav>
            <div class="burger">
                <div class="burger-line1"></div>
                <div class="burger-line2"></div>
                <div class="burger-line3"></div>
            </div>
        </header>
        <el-carousel id="home" indicator-position="outside" height="100vh" class="carousel" ref="carousel"
                     @change="carouselChange(activeIndex)">
            <el-carousel-item class="carousel_slide">
                <div class="carousel-caption">
                    <h1>用创新点缀人生，让科技融入理想。</h1>
                    <h3>
                        科技创新大平台，智慧生活新引擎。依靠科技进步推进经济跨域式发展。用创新点缀人生，让科技融入理想。
                    </h3>
                    <button class="explore-btn"> 探索更多</button>
                </div>
                <!--遮罩层-->
                <div class="backdrop"></div>
                <img src="../assets/images/people-in-couch-1024248.jpg">
            </el-carousel-item>
            <el-carousel-item class="carousel_slide">
                <div class="carousel-caption left">
                    <h1>科技改变世界</h1>
                    <h3>
                        立足科学发展，着力自主创新。加速科技进步，为全市经济社会发展提供有力支撑。凝聚科技创意，成就创新梦想。
                    </h3>
                    <button class="explore-btn"> 探索更多</button>
                </div>
                <!--遮罩层-->
                <div class="backdrop"></div>
                <!--muted静音 loop循环-->
                <video src="../assets/videos/working-man.mp4" muted autoplay loop></video>
            </el-carousel-item>
        </el-carousel>
        <div class="content-wrapper">
            <section id="about-us" class="about-us">
                <h2 class="title1">关于我们</h2>
                <p class="intro">{{introduction}}</p>
                <div class="features">
                    <div class="feature" v-for="(item,index) in features" :key="index">
                        <i :class="item.icon"></i>
                        <h4 class="feature-title">{{item.title}}</h4>
                        <p class="feature-content">{{item.content}}</p>
                    </div>
                </div>
            </section>
            <section id="showcases" class="showcases section-bg">
                <h2 class="title1">成功案例</h2>
                <div class="filter-btns">
                    <button class="filter-btn active" data-filter="*">全部</button>
                    <button class="filter-btn" data-filter=".web">WEB</button>
                    <button class="filter-btn " data-filter=".mobile">移动</button>
                    <button class="filter-btn " data-filter=".science">科研</button>
                </div>
                <div class="cases">
                    <div class="case-item web science">
                        <img src="../assets/images/photo-of-imac-near-macbook-1029757.jpg">
                    </div>
                    <div class="case-item web science">
                        <img src="../assets/images/person-holding-a-smartphone-892757.jpg">
                    </div>
                    <div class="case-item web">
                        <img src="../assets/images/person-using-black-and-white-smartphone-and-holding-blue-230544.jpg">
                    </div>
                    <div class="case-item web">
                        <img src="../assets/images/apple-apple-device-design-desk-285814.jpg">
                    </div>
                    <div class="case-item mobile">
                        <img src="../assets/images/apple-laptop-notebook-office-39284.jpg">
                    </div>
                    <div class="case-item science">
                        <img src="../assets/images/gray-laptop-computer-showing-html-codes-in-shallow-focus-160107.jpg">
                    </div>
                    <div class="case-item mobile web science">
                        <img src="../assets/images/blur-close-up-code-computer-546819.jpg">
                    </div>
                    <div class="case-item mobile">
                        <img src="../assets/images/bokeh-photography-of-person-holding-turned-on-iphone-1440727.jpg">
                    </div>
                </div>
            </section>
            <section id="service" class="service">
                <h2 class="title1">服务流程</h2>
                <p class="intro">
                    {{serviceIntro}}
                </p>
                <div class="services">
                    <div class="service-item" v-for="(item,index) in services" :key="index">
                        <i :class="item.icon"></i>
                        <h2 class="service-title">{{item.title}}</h2>
                        <p class="service-content">
                            {{item.content}}
                        </p>
                    </div>
                </div>
            </section>
            <section id="team-intro" class="team-intro section-bg">
                <h2 class="title1">团队介绍</h2>
                <div class="team-numbers">
                    <div class="team-number" v-for="(item,index) in numbers" :key="index">
                        <div class="profile-image">
                            <el-image :src="item.photo" class="img"/>
                        </div>
                        <h4 class="name">{{item.name}}</h4>
                        <p class="position">{{item.position}}</p>
                        <ul class="social-links">
                            <li><a href="#"><i class="fa fa-weixin"></i></a></li>
                            <li><a href="#"><i class="fa fa-weibo"></i></a></li>
                            <li><a href="#"><i class="fa fa-github"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section class="data-section">
                <div class="data-piece" v-for="(item,index) in datas" :key="index">
                    <i :class="item.icon"></i>
                    <div class="num">{{item.num}}</div>
                    <div class="data-desc">{{item.desc}}</div>
                </div>
            </section>
            <section id="company-activities" class="company-activities">
                <h2 class="title1">公司动态</h2>
                <p class="intro">关注公司动态，第一时间获取一手信息</p>
                <div class="activities">
                    <div class="activity" v-for="(item,index) in activities" :key="index">
                        <div class="act-image-wrapper">
                            <el-image :src="item.img" class="img"></el-image>
                        </div>
                        <div class="meta">
                            <p class="date-published">
                                <i class="fa fa-calendar"></i>{{item.calendar}}
                            </p>
                            <p class="comments"><i class="fa fa-comments"></i>{{item.comments}}<span>条评论</span></p>
                        </div>
                        <h2 class="act-title">{{item.title}}</h2>
                        <article>
                            {{item.article}}
                        </article>
                        <button class="read-more-btn">阅读更多</button>
                    </div>
                </div>
            </section>

        </div>
        <footer>
            <div class="footer-menus">
                <div class="contact-us">
                    <p class="menu-title">联系我们</p>
                    <p>地址:湖北省</p>
                    <p>电话：0772-4269341</p>
                    <p>传真：@mail219.mp</p>
                    <p>电子邮件：admin@abc.com</p>
                </div>
                <div class="service-menu footer-menu">
                    <p class="menu-title">服务概览</p>
                    <ul class="menu-items">
                        <li><a href="#">网站建设</a></li>
                        <li><a href="#">域名购买</a></li>
                        <li><a href="#">网页设计</a></li>
                        <li><a href="#">移动应用</a></li>
                    </ul>
                </div>
                <div class="service-menu footer-menu">
                    <p class="menu-title">成功案例</p>
                    <ul class="menu-items">
                        <li><a href="#">桌面网站</a></li>
                        <li><a href="#">移动网站</a></li>
                        <li><a href="#">科研网站</a></li>
                        <li><a href="#">软件应用</a></li>
                    </ul>
                </div>
                <div class="service-menu footer-menu">
                    <p class="menu-title">公司动态</p>
                    <ul class="menu-items">
                        <li><a href="#">信息公开</a></li>
                        <li><a href="#">最近新闻</a></li>
                        <li><a href="#">最新博客</a></li>
                    </ul>
                </div>
                <div class="service-menu footer-menu">
                    <p class="menu-title">帮助与支持</p>
                    <ul class="menu-items">
                        <li><a href="#">帮助中心</a></li>
                        <li><a href="#">联系客服</a></li>
                        <li><a href="#">文档资源</a></li>
                    </ul>
                </div>
            </div>
            <p class="icp-info">湘ICP备19026630号-1</p>
            <p class="rights">&copy; 2020 吐鲁番科技有限公司</p>
            <div class="scroll-to-top">
                <a href="#home"><i class="fa fa-chevron-up"></i></a>
            </div>
        </footer>
    </div>
</template>

<script>
    import anime from 'animejs/lib/anime.es'
    import Isotope from '../assets/lib/isotope/isotope.pkgd.min'
   import SmoothScroll from '../assets/lib/smooth-scroll/smooth-scroll.polyfills.min'

   import {header} from './Home/index'

    export default {
        name: "Home",
        data() {
            return {
                Index: 0,
                introduction: '网络公司不仅仅是提供域名注册、空间租用、网站开发、网站建设与网络营销活动策划相关的企业组织',
                serviceIntro: '网络综合公司，提供包括网络基础服务(如域名、主机、邮箱)和网络增值服务(如网站建设和推广，网站优化)等业务',
                features: [
                    {
                        icon: 'fa fa-lightbulb-o',
                        title: '品牌创意',
                        content: '为企业设计独特的并能完美呈现企业价值观的视觉'
                    },

                    {
                        icon: 'fa fa-line-chart',
                        title: '整合营销',
                        content: '通过市场进入分析、制定网络营销战略、网络营销实施'
                    },
                    {
                        icon: 'fa fa-shopping-cart',
                        title: '电子商务',
                        content: '根据企业需求，开设不同的销售渠道，通过网上直销'
                    },
                    {
                        icon: 'fa fa-desktop',
                        title: '网页设计',
                        content: '通过网站建设、只能建站、域名主机、企业邮箱'
                    },
                    {
                        icon: 'fa fa-tachometer',
                        title: '网站优化',
                        content: '网站推广是使将网站推广到国内各大知名网站和搜索引擎'
                    },
                    {
                        icon: 'fa fa-server',
                        title: '网页架设',
                        content: '通过绑定域名和服务器，把网站展现给全世界'
                    },
                ],
                services: [
                    {
                        icon: 'fa fa-comments',
                        title: '需求沟通',
                        content: '客户提出网站建设的基本要求，包括设计要求和功能要求',
                    },
                    {
                        icon: 'fa fa-asterisk',
                        title: '项目评估',
                        content: '根据客户提出的需求进行评估，估算出相应的时间与费用',
                    },
                    {
                        icon: 'fa fa-file',
                        title: '签订合同',
                        content: '合作双方确认费用、工期，合作要求基础上，双方共同签订合同',
                    },
                    {
                        icon: 'fa fa-user',
                        title: '提案阶段',
                        content: '完成网站初稿DEMO设计，包括首页风格，内页风格页面',
                    },
                    {
                        icon: 'fa fa-magic',
                        title: '制作阶段',
                        content: '完成所有页面的设计，进行程序开发以及前后后台的页面整合',
                    },
                    {
                        icon: 'fa fa-check',
                        title: '网站验收',
                        content: '根据合同条款进行网站验收，并签署网站验收确认',
                    },
                ],
                numbers: [
                    {
                        photo: require('../assets/images/man-wearing-black-suit-2955376.jpg'),
                        name: 'Bru Bee',
                        position: '技术架构师'
                    },
                    {
                        photo: require('../assets/images/smiling-woman-wearing-black-sweater-1587009.jpg'),
                        name: 'Jackson',
                        position: '前端工程师'
                    },
                    {
                        photo: require('../assets/images/selective-focus-photograph-of-man-wearing-gray-suit-jacket-1138903.jpg'),
                        name: 'Mike',
                        position: 'Java后台开发'
                    },
                    {
                        photo: require('../assets/images/business-woman-2697954_1920.jpg'),
                        name: 'May',
                        position: '前端工程师'
                    }
                ],
                datas: [
                    {
                        icon: 'fa fa-code',
                        num: 156,
                        desc: '行代码'
                    },
                    {
                        icon: 'fa fa-money',
                        num: 288,
                        desc: '个奖项'
                    },
                    {
                        icon: 'fa fa-eye',
                        num: 1588,
                        desc: '位客户'
                    },
                    {
                        icon: 'fa fa-folder',
                        num: 200,
                        desc: '个项目'
                    },
                ],
                activities: [
                    {
                        img: require('../assets/images/activity01-image.jpg'),
                        calendar: '2019年8月13日',
                        comments: '39',
                        title: '提供互联网接入的ISP公司',
                        article: 'ISP证，全称为互联网接入服务业务(ISP)，是第二类增值电信业务。根据国务院相关规定，从事增值电信业务，就需要办理相应的增值电信业务许可证，增值电信业务经营许可证是按照国务院《中华人民共和国电信条例》，由工信部、各省市通信管理局对从事增值电信业务的企业颁发的从业证明，否则就是无证经营。被查需要负法律责任。'
                    },
                    {
                        img: require('../assets/images/red-suspension-bridge-3493772.jpg'),
                        calendar: '2019年12月1日',
                        comments: '99',
                        title: '提供互联网接入的ISP公司',
                        article:
                            'ISP证，全称为互联网接入服务业务(ISP)，是第二类增值电信业务。根据国务院相关规定，从事增值电信业务，就需要办理相应的增值电信业务许可证，增值电信业务经营许可证是按照国务院《中华人民共和国电信条例》，由工信部、各省市通信管理局对从事增值电信业务的企业颁发的从业证明，否则就是无证经营。被查需要负法律责任。'
                    },
                    {
                        img: require('../assets/images/watercrafts-on-river-3464632.jpg'),
                        calendar: '2018年9月17日',
                        comments: '83',
                        title: '提供互联网接入的ISP公司',
                        article: 'ISP证，全称为互联网接入服务业务(ISP)，是第二类增值电信业务。根据国务院相关规定，从事增值电信业务，就需要办理相应的增值电信业务许可证，增值电信业务经营许可证是按照国务院《中华人民共和国电信条例》'
                    },
                ]
            }
        },
        computed: {
            activeIndex() {
                return this.$refs.carousel.activeIndex;
            }
        },
        /*在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图*/
        created() {
            document.querySelectorAll(".carousel-caption > *").forEach(el => {
                el.style.opacity = 0;
            })

        },
        /*在模板渲染成html后调用，在初始化界面完成后，再对html的dom节点进行一些需要的操作*/
        mounted() {

            this.$nextTick(function () {
                this.carouselChange(this.Index);
                this.initIsotope();
                header();
                this.initSmoothScroll();
            })
        },

        methods: {
            carouselChange: function (activeIndex) {
                const captionsEl = document.querySelectorAll('.carousel-caption');
                const caption = captionsEl[activeIndex]
                anime({
                    targets: caption.children,
                    opacity: [0, 1],
                    duration: 800,
                    easing: "linear",
                    delay: anime.stagger(400, {start: 300}),
                    translationY: [anime.stagger([40, 10]), 0]
                });
            },
            initIsotope() {
                const isotope = new Isotope('.cases', {
                    layoutMode: "fitRows",
                    itemSelector: '.case-item'
                })
                const filterBtns = document.querySelector(".filter-btns");
                filterBtns.addEventListener("click", e => {
                    //target为点击的item
                    let {target} = e;
                    console.log(target)
                    const filterOption = target.getAttribute("data-filter");
                    if (filterOption) {
                        document.querySelectorAll(".filter-btn.active").forEach(btn => btn.classList.remove('active'));
                        target.classList.add("active");
                        isotope.arrange({filter: filterOption});
                    }
                })
            },
            initSmoothScroll(){
               const scroll=new SmoothScroll('nav a[href*="#"], .scroll-to-top a[href*="#"]',{
                    /*是否有固定导航*/
                    header:"header",
                    /*当滚动到区域时的偏移量*/
                    offset:80
                })
              /* const headerEL=document.querySelector('header');
                document.addEventListener('scrollStart',()=>{
                    alert('click')
                    if(headerEL.classList.contains('open')){
                        headerEL.classList.remove('open');
                    }
                });*/
            }
        }
    }
</script>

<style scoped>
    @import "../assets/style/style.css";

</style>
