import Image from "next/image";  // Corrected import statement for Image from Next.js
import styles from "./page.module.css"; // Import CSS styles
import Logo from "./logo"; // Corrected import statement for

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <div>
          <div className={styles["head-logo"]}>hello</div>
          <div className={styles["head-logo-container"]}>
            <img
              src="https://halpes-nuxt.vercel.app/_nuxt/img/logo-1.9b257c6.png"
              alt="Logo"
            />
          </div>
        </div>

        <div className={styles.head}>Welcome to the charity &amp; Donation Theme</div>
        <div className={styles["social"]}>
           <a href="#" className={styles['link']}>
        <svg xmlns="http://www.w3.org/2000/svg" className={styles["twitter-icon"]} alt="Twitter" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
</svg> </a> 
          <a href="#" className="link1">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px"  className={styles["facebook-icon"]} alt="Facebook" y="0px" width="100" height="100" viewBox="0 0 50 50">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
</svg>
          </a>
          <a href="#" className="link2">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" className={styles["instagram-icon"]} alt="Instagram" y="0px" width="100" height="100" viewBox="0 0 32 32">
<path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
</svg> 
 </a>
          <a href="#" className="link3">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  className={styles["dribble-icon"]} alt="Dribble" width="100" height="100" viewBox="0 0 48 48">
<path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 28.142307 7 31.929518 8.4763377 34.875 10.927734 C 32.122374 13.351092 28.974768 15.323142 25.580078 16.835938 C 23.811529 13.61959 21.891654 10.500767 19.736328 7.5585938 C 21.100562 7.2070927 22.524179 7 24 7 z M 16.785156 8.6171875 C 18.997535 11.542724 20.949628 14.664262 22.746094 17.886719 C 19.050465 19.170625 15.137713 20 11 20 C 9.8323552 20 8.6813446 19.922155 7.5390625 19.810547 C 8.7969115 14.835264 12.230939 10.75149 16.785156 8.6171875 z M 37.001953 13.046875 C 39.461176 15.964926 40.9535 19.721786 40.992188 23.837891 C 38.832662 23.296195 36.575941 23 34.25 23 C 32.4219 23 30.655764 23.235969 28.925781 23.574219 C 28.323231 22.178362 27.663283 20.821807 26.984375 19.46875 C 30.643681 17.813906 34.040456 15.676234 37.001953 13.046875 z M 24.177734 20.570312 C 24.811258 21.821635 25.45011 23.063845 26.015625 24.353516 C 19.953229 26.24965 14.749259 30.09875 11.257812 35.238281 C 8.6153572 32.243192 7 28.319322 7 24 C 7 23.585614 7.0335222 23.180292 7.0625 22.773438 C 8.3577913 22.906235 9.665848 23 11 23 C 15.643379 23 20.045102 22.063249 24.177734 20.570312 z M 34.25 26 C 36.498791 26 38.668342 26.319367 40.738281 26.882812 C 39.953494 31.489342 37.336086 35.457573 33.644531 38.001953 C 32.755328 34.064901 31.510607 30.269114 30.085938 26.5625 C 31.460152 26.325929 32.807024 26 34.25 26 z M 27.091797 27.125 C 28.662683 31.125628 30.006215 35.241408 30.90625 39.53125 C 28.795754 40.468547 26.462824 41 24 41 C 20.010678 41 16.357113 39.622608 13.460938 37.332031 C 16.608874 32.477365 21.430763 28.841138 27.091797 27.125 z"></path>
</svg>
          </a>
        </div>
        <div className={styles["mail-id"]}>needhelp@company.com</div>
        <div className={styles["mali-logo"]}>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles['mail-logo']} viewBox="0 0 32 32"><path fill="#00c29a" d="M2.004 9.303A4.5 4.5 0 0 1 6.5 5h19a4.5 4.5 0 0 1 4.496 4.303l-1.476.82L16 16.864L3.48 10.123zM2 11.588V22.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5V11.588l-.526.293l-13 7a1 1 0 0 1-.948 0L2.514 11.874z"/></svg>
        </div>
      </header>

      <div className={styles["hz-line"]}>
        <hr />
      </div>
      <nav>
        <ul className={styles["navbar"]}>
          <li className={styles["dropdown"]}>
            <a href="#" className={styles["dropbtn"]}>
              Home
            </a>
            <div className={styles["dropdown-content"]}>
              <a href="#">Home 01</a>
              <a href="#">Home 02</a>
              <a href="#">Home 03</a>
              <a href="#">Header styles</a>
            </div>
          </li>
          <li className={styles["dropdown"]}>
            <a href="#" className={styles["dropbtn"]}>
              Pages
            </a>
            <div className={styles["dropdown-content"]}>
              <a href="#">About</a>
              <a href="#">Volunteers</a>
              <a href="#">Gallery</a>
              <a href="#">Become a Volunteer</a>
            </div>
          </li>
          <li className={styles["dropdown"]}>
            <a href="#" className={styles["dropbtn"]}>
              Donations
            </a>
            <div className={styles["dropdown-content"]}>
              <a href="#">Causes</a>
              <a href="#">Causes Details</a>
            </div>
          </li>
          <li className={styles["dropdown"]}>
            <a href="#" className={styles["dropbtn"]}>
              Events
            </a>
            <div className={styles["dropdown-content"]}>
              <a href="#">Events </a>
              <a href="#">Events Details</a>
            </div>
          </li>
          <li className={styles["dropdown"]}>
            <a href="#" className={styles["dropbtn"]}>
              News
            </a>
            <div className={styles["dropdown-content"]}>
              <a href="#">News</a>
              <a href="#">News Details</a>
            </div>
          </li>
          <li className={styles["dropdown"]}>
            <a href="#" className={styles["dropbtn"]}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <a href="#" className={styles['link4']}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2.3em"
          height="2.3em"
          className={styles['search-icon']}
          viewBox="0 0 256 256"
        >
          <path
            fill="black"
            d="M228.24 219.76l-51.38-51.38a86.15 86.15 0 1 0-8.48 8.48l51.38 51.38a6 6 0 0 0 8.48-8.48M38 112a74 74 0 1 1 74 74a74.09 74.09 0 0 1-74-74"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2.3em"
          height="2.3em"
          className={styles['cart-icon']}
          viewBox="0 0 50 50"
        >
          <path
            fill="black"
            d="M35 34H13c-.3 0-.6-.2-.8-.4s-.2-.6-.1-.9l1.9-4.8L12.1 10H6V8h7c.5 0 .9.4 1 .9l2 19c0 .2 0 .3-.1.5L14.5 32H36z"
          />
          <path
            fill="currentColor"
            d="M15.2 29l-.4-2L38 22.2V14H14v-2h25c.6 0 1 .4 1 1v10c0 .5-.3.9-.8 1zM36 40c-2.2 0-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4s-1.8 4-4 4m0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-24 6c-2.2 0-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4s-1.8 4-4 4m0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"
          />
        </svg>
      </a>
      <div className={styles["Donate-button"]}>
        <div className={styles["Donate-button-text"]}>❤ Donate</div>
      </div>

      
<div className={styles['hello-world']}>
        <div className={styles['zoom-in-container']}>
          <img
            src="https://halpes-nuxt.vercel.app/_nuxt/img/main-slider-1-1.990aeb7.jpg"
            width="100%"
            alt="Zoom In Image"
            className={styles['zoom-in']}
          />
        </div>

</div>
  <div className={styles['size-boxey']}></div>    
      <div className={styles['text-overlay']}>
        <p className={styles['overlay-text']}>
          Help the poor <br /> in Need
        </p>
      </div>
 <img
          src="https://halpes-nuxt.vercel.app/_nuxt/img/main-slider-1-shape-1.f567034.png"
          className={styles['overlayy-text']}
          alt="Overlay Text"
        />

 <button class={styles['learn-button']}><div class={styles['text']}>Learn More</div> 
                <div className={styles['heil']}></div><svg xmlns="http://www.w3.org/2000/svg" width="0.7em" height="0.7em" className={styles['Svg-one1']} viewBox="0 0 56 56"><path fill="#00c29a" d="M49.762 28c0-.586-.234-1.125-.703-1.57L33.543 10.938c-.516-.516-1.031-.704-1.594-.704c-1.148 0-2.039.844-2.039 2.016c0 .563.188 1.101.563 1.477l5.25 5.343l7.898 7.196l-5.672-.352H8.301c-1.195 0-2.063.867-2.063 2.086c0 1.219.867 2.086 2.063 2.086h29.648l5.696-.352l-7.922 7.196l-5.25 5.343c-.375.352-.563.914-.563 1.477c0 1.172.89 2.016 2.04 2.016c.562 0 1.054-.211 1.523-.657L49.059 29.57c.469-.445.703-.984.703-1.57"/></svg>
            </button>


 <div className="third-box-container">
  
      <button className={styles['data-counter']}>
        <div className={styles['count']}>4390</div>
        <div className={styles['data-text']}>
          Volunteers are
          <br /> available
        </div>
      </button>
      <button className={styles['data-counter-2']}>
        <div className={styles['count-2']}>8900</div>
        <div className={styles['data-text-2']}>
          Funds Raised by <br />
          People
        </div>
      </button>
     
    </div>
      <div className={styles["page-2"]}>
        <div className={styles["fourth-box"]}></div>
        <div className={styles["img"]}>
          <img
            src="https://th.bing.com/th/id/OIP.yTdvYHt-e0xBya9t2nm92gHaLG?w=800&h=1199&rs=1&pid=ImgDetMain"
            height="600px"
            width="600px" // Set width to a valid value
            alt="Charity Image"
          />
        </div>
        <div className={styles["img-1"]}>
          <img
            src="https://live.staticflickr.com/65535/49049947267_cf0d54cdde_b.jpg"
            alt="Welcome Image"
          />
        </div>

<div className={styles["img-22"]}>
<div className={styles['Wel-box']}></div>
<div className={styles['welcome-container']}>
            <div className={styles['welcome']}>Welcome to Charity</div>
            <div class={styles['Heading']}>Helping each other<br/> can make world better</div>
            <div class={styles['wel-text']}>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit <br/>sed do eiusmod tempor incididunt ut labore et simply free text <br/>dolore magna aliqua lonm andhn.</div>
            <div>
                <div class={styles['head-one']}>Our Mission</div>
                <div class={styles['head-text']}>Lorem ipsum dolor sit amet not is consectetur notted.</div>
            </div>
            <div>
                <div class={styles['head-two']}>Our Story</div>
                <div class={styles['head-text-two']}>Lorem ipsum dolor sit amet not is <br/> consectetur notted.</div>
            </div>
            </div>
<div class={styles['progress-bar-container-one']}>
                    <span class={styles['label']}>Charity<br/></span>
                    <div class={styles['progress-bar']}>
                        <div class={styles['progress']}>
                            <div class={styles['progress-filled']} ></div>
                        </div>
                        <span class={styles['percentage']}>83%</span>
                    </div>
                    <div class={styles['progress-bar']}>
                        <span class={styles['label-one']}>Donations</span>
                        <div class={styles['progress-one']}>
                            <div class={styles['progress-filled1']}></div>
                        </div>
                        <span class={styles['percentage-ones']}>38%</span>
                    </div>
                </div>
           <button class={styles['learn-contain']}> Learn More
            <div class={styles['learn-box']}></div> 
                <svg xmlns="http://www.w3.org/2000/svg" width="0.7em" height="0.7em" className={styles['Svg-one']} viewBox="0 0 56 56"><path fill="#00c29a" d="M49.762 28c0-.586-.234-1.125-.703-1.57L33.543 10.938c-.516-.516-1.031-.704-1.594-.704c-1.148 0-2.039.844-2.039 2.016c0 .563.188 1.101.563 1.477l5.25 5.343l7.898 7.196l-5.672-.352H8.301c-1.195 0-2.063.867-2.063 2.086c0 1.219.867 2.086 2.063 2.086h29.648l5.696-.352l-7.922 7.196l-5.25 5.343c-.375.352-.563.914-.563 1.477c0 1.172.89 2.016 2.04 2.016c.562 0 1.054-.211 1.523-.657L49.059 29.57c.469-.445.703-.984.703-1.57"/></svg>
            </button>
            <div class={styles['text-learn']}>Helping Today</div>
            <div class={styles['learn-img']}><img src="https://halpes-nuxt.vercel.app/_nuxt/img/welcome-one-heart-icon.6a2f3f8.png" height="180px" width="180px"/></div>
        </div>
</div>

<>
{/* page-3 started */}
  <div className={styles['page-3']}></div>
<div className={styles['pages-3']}>
    <div className={styles['pagesss-3']}/>
    <div className={styles['box5']}/>
    <div className={styles['head3']}>Latest Causes</div>
    <div className={styles['sub-head']}>
      Find the popular cause <br/>
    </div>

    <div className={styles['subsub-head']}>and donate them</div>
    <div className={styles['box-container']} />
    <a href="#" className="link6"></a>
    <div className={styles['ima-ge1']}>
      <a href="#" className="link7">
        <img
          src="https://th.bing.com/th/id/R.b87d36090f547a5df0707a2ffb2af113?rik=qc93XcqsMW4wPA&riu=http%3a%2f%2f3.bp.blogspot.com%2f_FM_DX5oQJEU%2fTQEhzrDkQyI%2fAAAAAAAAAAU%2fwXGxjrdO1lM%2fw1200-h630-p-k-no-nu%2fgnh1.jpg&ehk=Euqw4xZOLBlH1sGf1blNgDM564isvfCLS4is%2be%2bBUIE%3d&risl=&pid=ImgRaw&r=0"
          width="308px"
          height="230px"
        />
      </a>
    </div>
    <div className={styles['med']} />
    <div className={styles['med-text']}>Medical</div>
    <a href="#" className={styles['link8']}>
      <div className={styles['heading1']}>
        Raise Fund for Clean &amp;
        <br/> Healthy Water
      </div>
    </a>
    <div className={styles['sub-heading1']}>
      There are not many of passages of lorem ipsum
      <br /> avail isn alteration donationa in <br />
      form simply free.
    </div>
    <div className={styles['calculate-meter']}/>
    <div className={styles['progress-bar-container1']}>
      <span className={styles['label2']}>
        $21,270
        <br />
      </span>
      <div className={styles['progress-bar1']}>
        <div className={styles['progress2']}>
          <div className={styles['progress-filled1']}/>
        </div>
        <span className={styles['percentage1']}>Raised</span>
      </div>
      <div className={styles['progress-bar1']}>
        <span className={styles['label3']}>$30,000</span>
      </div>
      <span className={styles['percentage2']}>Goal</span>
    </div>
    {/*2nd box*/}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      className={styles['msgbox1']}
      viewBox="0 0 2048 2048"
    >
      <path fill="currentColor" d="M2048 128v1408H704l-448 448v-448H0V128z" />
    </svg>
    <span className={styles['msgBox11']}>69%</span>
    <div className={styles['box-container1']}/>
    <a href="#" className={styles['link9']}></a>
    <div className={styles['image2']}>
      <a href="#">
        <img
          src="https://eco-business.imgix.net/uploads/ebmedia/fileuploads/26342532773_2fff15ca2d_z.jpg?fit=crop&h=801&ixlib=django-1.2.0&q=85&w=1200"
          width="308px"
          height="230px"
        />
      </a>
    </div>
    <div className={styles['med1']}/>
    <div className={styles['med1-text']}>Medical</div>
    <a href="#" className={styles['link10']}>
      <div className={styles['heading2']}>
        Our Donation is hope for
        <br /> our children
      </div>
    </a>
    <div className={styles['sub-heading2']}>
      There are not many of passages of lorem
      <br /> ipsum avail isn alteration donationa in
      <br /> form simply free.
    </div>
    <div className={styles['calculate-meter1']} />
    <div className={styles['progress-bar-container4']}>
      <span className={styles['label4']}>
        $15,270
        <br />
      </span>
      <div className={styles['progress4']}>
        <div className={styles['progress-filled4']}/>
      </div>
      <span className={styles['percentage4']}>Raised</span>
    </div>
    <div className={styles['progress-bar4']}>
      <span className={styles['label5']}>$30,000</span>
    </div>
    <span className={styles['percentage5']}>Goal</span>
  <div className={styles['box-container2']}/>
  <a href="#"></a>
  <div className={styles['image3']}>
    <a href="#">
      <img
        src="https://newsxday.com/wp-content/uploads/2021/02/Katt-Williams-Kids-1.jpg"
        width="308px"
        height="230px"
      />
    </a>
  </div>
  <div className={styles['med2']}/>
  <div className={styles['med2-text']}>Medical</div>
  <a href="#" className={styles['link13']}>
    <div className={styles['heading3']}>
      Education for poor
      <br/> children
    </div>
  </a>
  <div className={styles['sub-heading3']}>
    There are not many of passages of lorem
    <br/> ipsum avail isn alteration donationa in
    <br/> form simply free.
  </div>
  <div className={styles['calculate-meter2']}/>
  <div className={styles['meter1']}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      className={styles['msgbox']}
      viewBox="0 0 2048 2048"
    >
      <path fill="currentColor" d="M2048 128v1408H704l-448 448v-448H0V128z" />
    </svg>
    <span className={styles['msgBoxxx']}>50%</span>
    <div className={styles['progress-bar-container5']}>
      <span className={styles['label6']}>
        $11,270
        <br />
      </span>
      <div className={styles['progress5']}>
        <div className={styles['progress-filled5']}/>
      </div>
      <span className={styles['percentage6']}>Raised</span>
    </div>
    <div className={styles['progress-bar5']}>
      <span className={styles['label7']}>$30,000</span>
    </div>
    <span className={styles['percentage7']}>Goal</span>
  </div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30px"
    height="30px"
    className={styles['msgbox2']}
    viewBox="0 0 2048 2048"
  >
    <path fill="currentColor" d="M2048 128v1408H704l-448 448v-448H0V128z" />
  </svg>
  <span className={styles['msggBox2']}>35%</span>
</div>
</>
{/* page 4 */}
<div className={styles['page-4']}>
  <div className={styles['jwellery-box']}>
    <img
      src="https://halpes-nuxt.vercel.app/_nuxt/img/join-one-bg.fb32608.jpg"
      width="100%"
      height="400px"
      style={{
        objectFit: "cover"
      }}
    />
  </div>
  <div className={styles['upp-text']}>
    Join the community to give education for children
  </div>
  <div className={styles['conatinerpage-4']}>
<div className={styles['conatinerpage4']}>
    <button className={styles['button']}>
      Learn More
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="0.7em"
        height="0.7em"
        className={styles['spany2']}
        viewBox="0 0 56 56"
      >
        <path
          fill="#00c29a"
          d="M49.762 28c0-.586-.234-1.125-.703-1.57L33.543 10.938c-.516-.516-1.031-.704-1.594-.704c-1.148 0-2.039.844-2.039 2.016c0 .563.188 1.101.563 1.477l5.25 5.343l7.898 7.196l-5.672-.352H8.301c-1.195 0-2.063.867-2.063 2.086c0 1.219.867 2.086 2.063 2.086h29.648l5.696-.352l-7.922 7.196l-5.25 5.343c-.375.352-.563.914-.563 1.477c0 1.172.89 2.016 2.04 2.016c.562 0 1.054-.211 1.523-.657L49.059 29.57c.469-.445.703-.984.703-1.57"
        />
      </svg>
</button>
 <div className={styles['box33']} /></div>
</div>

   <img
      src="https://halpes-nuxt.vercel.app/_nuxt/img/three-boxes-img-1.1678f25.jpg"
className={styles['imggg']}
    />
    <div className={styles['upp1']}/>
    <div className={styles['upp1-head']}>Healthy Food</div>
    <div className={styles['upp1-text']}>
      Lorem ipsum is simply free text available <br />
      amet, consectetuer adipiscing elit. There
      <br /> are not many passages of ipsum.
    </div>
    <button className={styles['but-donate']}> ❤ Donate</button>
    <div className={styles['logo-upp']}/>
    <img
      src="https://halpes-nuxt.vercel.app/_nuxt/img/three-boxes-img-1.1678f25.jpg"
      style={{
        marginTop: "-350px",
        position: "absolute",
        width: 490,
        height: 350,
        marginLeft: 480,
        filter: "grayscale(1)"
      }}
    />
    <div className={styles['upp2']}/>
    <div className={styles['upp2-head']}>Clean Water</div>
    <div className={styles['textupp']}>
      Lorem ipsum is simply free text available <br />
      amet, consectetuer adipiscing elit. There
      <br /> are not many passages of ipsum.
    </div>
    <button className={styles['upp-donate']}>❤ Donate</button>
    <img
      src="https://halpes-nuxt.vercel.app/_nuxt/img/three-boxes-img-1.1678f25.jpg"
      style={{
        marginTop: "-352px",
        position: "absolute",
        width: 490,
        height: 352,
        marginLeft: 970,
        filter: "grayscale(1)"
      }}
    />
    <div className={styles['upp3']}/>
    <div className={styles['upp3-head']}>Medical Treatment</div>
    <div className={styles['upp3-text']}>
      Lorem ipsum is simply free text available <br />
      amet, consectetuer adipiscing elit. There
      <br /> are not many passages of ipsum.
    </div>
    <button className={styles['but-donate3']}> ❤ Donate</button>
  </div>


 <div className={styles['page-5']}>
        <div className={styles['gre-5']}/>
        <div className={styles['head-5']}>Latest Causes</div>
        <div className={styles['heading-5']}>Find the popular cause</div>
        <div className={styles['subsubhead5']}> and donate them</div>
        <div className={styles['aside-5']}>We're Helping Today. Helping Tomorrow</div>
        <div className={styles['aside-text']}>
          There are many variations of passages of available but the majority
          have
          <br /> suffered alteration in some form, by injected humou or
          randomised
          <br /> words even slightly believable. All the Lorem Ipsum generators
          on the
          <br /> Internet tend.
        </div>
        <div className={styles['points']}>
          <ul>
            <li>Making this the first true generator on the Internet</li>
            <li>Lorem Ipsum is not simply random text</li>
            <li>If you are going to use a passage</li>
          </ul>
        </div>
        <div className={styles['img-logo']}/>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.1em"
          height="1.1em"
          className={styles['donater']}
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            d="M20 17q.86 0 1.45.6t.58 1.4L14 22l-7-2v-9h1.95l7.27 2.69q.78.31.78 1.12q0 .47-.34.82t-.86.37H13l-1.75-.67l-.33.94L13 17zM16 3.23Q17.06 2 18.7 2q1.36 0 2.3 1t1 2.3q0 1.03-1 2.46t-1.97 2.39T16 13q-2.08-1.89-3.06-2.85t-1.97-2.39T10 5.3q0-1.36.97-2.3t2.34-1q1.6 0 2.69 1.23M.984 11H5v11H.984z"
          />
        </svg>
        <div className={styles['image-5']}>
          <img
            src="https://static8.depositphotos.com/1320014/920/i/450/depositphotos_9201095-stock-photo-street-urchins.jpg"
            width=" 590px"
            height="280px"
          />
        </div>
        <div className={styles['conty']}/>
        <div className={styles['containerhulu']}>
          <div className={styles['donation-form']}>
            <form>
              <div className={styles['form-group']}>
                <input
                  type="number"
                  className={styles['amount']}
                  name="amount"
                  placeholder="Enter Donation Amount"
                />
              </div>
              <div className={styles['form-group1']}>
                <input
                  type="name"
                  className={styles['name']}
                  name="amount"
                  placeholder="Your name"
                />
              </div>
              <div className={styles['form-group2']}>
                <input
                  type="email"
                  className={styles['input-email']}
                  name="email"
                  placeholder="Email Address"
                />
              </div>
              <div className={styles['form-group3']}>
                <input
                  type="number"
                  className={styles['pnumber']}
                  name="phone"
                  placeholder="Phone Number"
                />
              </div>
            </form>
          </div>
          <div className={styles['message-box']}>
            <textarea className={styles['textarea']} placeholder="Write Message" defaultValue={""} />
          </div>
          <button className={styles['continue']}>
            Continue Now
            <div className={styles['box10']}/>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.7em"
              height="0.7em"
              className={styles['spany5']}
              viewBox="0 0 56 56"
            >
              <path
                fill="#00c29a"
                d="M49.762 28c0-.586-.234-1.125-.703-1.57L33.543 10.938c-.516-.516-1.031-.704-1.594-.704c-1.148 0-2.039.844-2.039 2.016c0 .563.188 1.101.563 1.477l5.25 5.343l7.898 7.196l-5.672-.352H8.301c-1.195 0-2.063.867-2.063 2.086c0 1.219.867 2.086 2.063 2.086h29.648l5.696-.352l-7.922 7.196l-5.25 5.343c-.375.352-.563.914-.563 1.477c0 1.172.89 2.016 2.04 2.016c.562 0 1.054-.211 1.523-.657L49.059 29.57c.469-.445.703-.984.703-1.57"
              />
            </svg>
          </button>
        </div>
</div>

{/* imageslider */}

 <div className={styles['images-slider']}>
          <div className={styles['img1']}>
            <img
              src="https://halpes-nuxt.vercel.app/_nuxt/img/gallery-page-img-2.9aae11c.jpg"
              className={styles['image']}
            />
            <div className={styles['overlay']}>
              <div className={styles['text1']}>
                Child Education
                <span
                  style={{
                    fontSize: 53,
                    fontFamily: "Brush Script MT",
                    fontStyle: "italic",
                    fontWeight: 100,
                    marginTop: "-40px",
                    position: "absolute",
                    marginLeft: "-150px"
                  }}
                >
                  <br />
                  charity
                </span>
              </div>
            </div>
          </div>
          <div className={styles['img2']}>
            <img
              src="https://halpes-nuxt.vercel.app/_nuxt/img/gallery-page-img-6.b40a1c6.jpg"
              className={styles['image']}
            />
            <div className={styles['overlay']}>
              <div className={styles['text1']}>
                Child Education{" "}
                <span
                  style={{
                    fontSize: 53,
                    fontFamily: "Brush Script MT",
                    fontStyle: "italic",
                    fontWeight: 100,
                    marginTop: "-40px",
                    position: "absolute",
                    marginLeft: "-150px"
                  }}
                >
                  <br />
                  charity
                </span>
              </div>
            </div>
          </div>
          <div className={styles['img3']}>
            <img
              src="https://halpes-nuxt.vercel.app/_nuxt/img/gallery-page-img-9.f57d91b.jpg"
              className={styles['image']}
            />
            <div className={styles['overlay']}>
              <div className={styles['text1']}>
                Child Education
                <span
                  style={{
                    fontSize: 53,
                    fontFamily: "Brush Script MT",
                    fontStyle: "italic",
                    fontWeight: 100,
                    marginTop: "-40px",
                    position: "absolute",
                    marginLeft: "-150px"
                  }}
                >
                  <br />
                  charity
                </span>
              </div>
            </div>
          </div>
          <div className={styles['img4']}>
            <img
              src="https://halpes-nuxt.vercel.app/_nuxt/img/gallery-page-img-3.1dfb555.jpg"
              className={styles['image']}
            />
            <div className={styles['overlay']}>
              <div className={styles['text1']}>
                Child Education{" "}
                <span
                  style={{
                    fontSize: 53,
                    fontFamily: "Brush Script MT",
                    fontStyle: "italic",
                    fontWeight: 100,
                    marginTop: "-40px",
                    position: "absolute",
                    marginLeft: "-150px"
                  }}
                >
                  <br />
                  charity
                </span>
              </div>
            </div>
          </div>
          <div className={styles['img5']}>
            <img
              src="https://halpes-nuxt.vercel.app/_nuxt/img/gallery-page-img-5.50611ef.jpg"
              className={styles['image']}
            />
            <div className={styles['overlay']}>
              <div className={styles['text1']}>
                Child Education{" "}
                <span
                  style={{
                    fontSize: 53,
                    fontFamily: "Brush Script MT",
                    fontStyle: "italic",
                    fontWeight: 100,
                    marginTop: "-40px",
                    position: "absolute",
                    marginLeft: "-150px"
                  }}
                >
                  <br />
                  charity
                </span>
              </div>
            </div>
          </div>
        </div>
<div className={styles['page-background']}><img src="https://halpes-nuxt.vercel.app/_nuxt/img/testimonial-1-bg.b721e27.jpg" width="100%" height="500px"/></div>
<div className={styles['page-content']}></div>

<div className={styles['testimonials-container']}>
      <div className={styles['testi']}>
        <img src="/path/to/image1.png" alt="Testimonial 1" />
      </div>
      
      <div className={styles['testimonial']}>
        <div className={styles['test-head']} />
        
        <div className={styles['test-heading']}>Our Testimonials</div>
        
        <div className={styles['test-subhead']}>
          What they're
          <br /> talking about
          <br /> charity
        </div>
        
        <div className={styles['arrows']} />
        
        <div className={styles['talk1']}>
          <div className={styles['talk1-text']}>
            Lorem ipsum is simply free text
            <br /> dolor sit amet, consectetur notted
            <br /> adipisicing elit sed do eiusmod
            <br /> tempor incididunt ut labore et
            <br /> dolore magna aliqua.
          </div>
          
          <div className={styles['talk1-img']}>
            <img src="https://halpes-nuxt.vercel.app/_nuxt/img/testimonial-2-img-1.fe746f1.png" alt="Volunteer 1" />
          </div>
          
          
          <div className={styles['talk1-name']}>Volunteer</div>
        </div>
        
        <div className={styles['talk2']}>
          <div className={styles['talk2-text']}>
            Lorem ipsum is simply free text
            <br /> dolor sit amet, consectetur notted
            <br /> adipisicing elit sed do eiusmod
            <br /> tempor incididunt ut labore et
            <br /> dolore magna aliqua.
          </div>
          
          <div className={styles['talk2-img']}>
            <img src="https://halpes-nuxt.vercel.app/_nuxt/img/testimonial-2-img-3.70ab465.png" alt="Volunteer 2" />
          </div>
          
          
          <div className={styles['talk2-name']}>Volunteer</div>
        </div>
      </div>

        {/*page 6*/}

<div class={styles['page-6']}>
            <div class={styles['head6-box']}>  
                <img src="https://halpes-nuxt.vercel.app/_nuxt/img/help-them-bg.977d979.jpg" width="100%" height="600px" /></div>
        </div>
        <div className={styles['box-6']} />
        <div className={styles['head6']}>
          Help them whenever
          <br /> they are in need
        </div>
        <a href="https://www.youtube.com/watch?v=i9E_Blai8vk" className="link14">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9em"
            height="9em"
            className={styles['play']}
            viewBox="0 0 56 56"
          >
            <path
              stroke="white"
              strokeWidth="0px"
              d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m0-3.984C16.937 47.922 8.1 39.062 8.1 28c0-11.04 8.813-19.922 19.876-19.922c11.039 0 19.921 8.883 19.945 19.922c.023 11.063-8.883 19.922-19.922 19.922m-4.125-11.297l12.539-7.406c.914-.563.89-1.852 0-2.367l-12.54-7.454c-.96-.562-2.226-.117-2.226.938v15.352c0 1.078 1.196 1.546 2.227.937"
            />
          </svg>
        </a>
        <div className={styles['watch']}>watch the video</div>
        <hr
          style={{
            marginLeft: 160,
            width: 1000,
            borderColor: "#747272",
            marginTop: "-270px",
            position: "absolute"
          }}
        />
        <div className={styles['head-6']}>Become a Volunteer</div>
        <div className={styles['head6-logo']} />
        <div className={styles['sub-head6']}>
          There are many variations of but the
          <br /> majority have simply free text
          <br /> suffered.
        </div>
        <div className={styles['head-7']}>Quick Fundrising</div>
        <div className={styles['head7-logo']}/>
        <div className={styles['sub-head7']}>
          There are many variations of but the
          <br /> majority have simply free text
          <br /> suffered.
        </div>
        <div className={styles['head-8']}>Start Donating</div>
        <div className={styles['head8-logo']} />
        <div className={styles['sub-head8']}>
          There are many variations of but the
          <br /> majority have simply free text
          <br /> suffered.
        </div>
      </div>
 {/*7th page*/}
      <div className={styles['page-7']}>
        <div className={styles['heading-7']} />
        <div className={styles['texthead7']}>Get Daily Updates</div>
        <div className={styles['sub-heading7']}>
          Latest news &amp; articles directly <br />
          coming from the blog
        </div>

        <button className={styles['head-learn']}>
          View More
          <div className={styles['box12']}/>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.7em"
            height="0.7em"
            className={styles['spany8']}
            viewBox="0 0 56 56"
          >
            <path
              fill="#00c29a"
              d="M49.762 28c0-.586-.234-1.125-.703-1.57L33.543 10.938c-.516-.516-1.031-.704-1.594-.704c-1.148 0-2.039.844-2.039 2.016c0 .563.188 1.101.563 1.477l5.25 5.343l7.898 7.196l-5.672-.352H8.301c-1.195 0-2.063.867-2.063 2.086c0 1.219.867 2.086 2.063 2.086h29.648l5.696-.352l-7.922 7.196l-5.25 5.343c-.375.352-.563.914-.563 1.477c0 1.172.89 2.016 2.04 2.016c.562 0 1.054-.211 1.523-.657L49.059 29.57c.469-.445.703-.984.703-1.57"
            />
          </svg>
        </button>
        <div className={styles['image-7']}>
          <img
            src="https://th.bing.com/th/id/R.bd8fd110134a586149bd5a5d4b00ab8f?rik=qxPElF4otOw87w&riu=http%3a%2f%2fi.dailymail.co.uk%2fi%2fpix%2f2016%2f04%2f22%2f15%2f337038F700000578-3553977-image-a-48_1461335284825.jpg&ehk=OZx0BgbBWvyfoerxcEF37xoR8FBAge6Ao1jbuIvs5CI%3d&risl=&pid=ImgRaw&r=0"
            style={{ width: 500, height: 390 }}
            className={styles['image']}
          />
          <div className={styles['overlay1']}>
            <div className={styles['text11']}>+</div>
          </div>
        </div>
        <div className={styles['img7-text']}/>
        <div className={styles['img-7']}>20 jan, 2021 / 2 comments</div>
        <div className={styles['cmnt']}>
          <a href="#" className={styles['link15']}>
            Donation is hope for Poor Childrens <br />
            in Africa
          </a>
        </div>
        <div className={styles['sidey']}>
          <img
            src="https://i.guim.co.uk/img/media/042162c23c40249dcd9cddab71009f628a6dd843/0_0_4300_2867/master/4300.jpg?width=300&quality=85&auto=format&fit=max&s=d7b5417a270263980d91983dca2ab1b3"
            width="270px"
            height="167px"
          />
        </div>
        <div className={styles['hello0']}>
          <div className={styles['date']}>
            20 Jan, 2021{" "}
            <span
              style={{
                color: "#575757",
                fontWeight: 700,
                marginLeft: 12,
                wordSpacing: 3
              }}
            >
              {" "}
              / 2 Comments
            </span>
          </div>
          <div className={styles['ques']}>
            How Does
            <br /> Malnutrition Affect
            <br /> Children?
          </div>
        </div>
        <div className={styles['side1']}>
          <img
            src="https://th.bing.com/th/id/OIP.nXIe9Y4zX0G00YBdRPnrAwHaDX?w=1366&h=621&rs=1&pid=ImgDetMain"
            width="270px"
            height="167px"
          />
        </div>
        <div className={styles['date1']}>
          20 Jan, 2021{" "}
          <span
            style={{
              color: "#575757",
              fontWeight: 700,
              marginLeft: 12,
              wordSpacing: 3
            }}
          >
            {" "}
            / 2 Comments
          </span>
        </div>
        <div className={styles['ques1']}>
          Capitalize on low <br />
          hanging fruit to
          <br /> identify
        </div>
        <div className={styles['side2']}>
          <img src="https://halpes-nuxt.vercel.app/_nuxt/img/news-one-right-img-3.3a47b54.jpg" />
        </div>
        <div className={styles['date2']}>
          20 Jan, 2021{" "}
          <span
            style={{
              color: "#575757",
              fontWeight: 700,
              marginLeft: 12,
              wordSpacing: 3
            }}
          >
            {" "}
            / 2 Comments
          </span>
        </div>
        <div className={styles['ques2']}>
          Override the digital
          <br /> divide with
          <br /> additional
        </div>
      </div>
<img
  src="https://halpes-nuxt.vercel.app/_nuxt/img/footer-bg.4bb12d1.jpg"
  width="1460px"
  height="600px"
  style={{ marginTop: 90 }}
/>


<div className={styles['lastorder']}>
 <div className={styles['last']}/>
      <div className={styles['last-box']}>
        <div className={styles['abt']}>About</div>
        <div className={styles['abt-text']}>
          Lorem ipsum dolor sit ame consect
          <br /> etur pisicing elit sed do eiusmod
          <br /> tempor incididunt ut labore.
        </div>
        <button className={styles['don']}> ❤ Donate</button>
        <div className={styles['div-ex']}>
          <div className={styles['explore']}>Explore</div>
          <ul className={styles['ex1']}>
            <a href="#" className={styles['link16']}>
              <li>Donate</li>
            </a>
            <a href="#"className={styles['link16']}>
              <li>Campigns</li>
            </a>
            <a href="#" className={styles['link16']}>
              <li>Fundarise</li>
            </a>
            <a href="#" className={styles['link16']}>
              <li>Volunteers</li>
            </a>
            <a href="#" className={styles['link16']}>
              <li>Sponsors</li>
            </a>
          </ul>
          <ul className={styles['ex6']}>
            <a href="#" className={styles['link16']}>
              <li>Fundarising</li>
            </a>
            <a href="#" className={styles['link16']}>
              <li>Contact</li>
            </a>
            <a href="#" className={styles['link16']}>
              <li>Help</li>
            </a>
            <a href="#" className={styles['link16']}>
              <li>Faqs</li>
            </a>
          </ul>
          <div className={styles['Contact-1']}>Contact</div>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 576 512"
            className={styles['g']}
          >
            <g className={styles['icomoon-ignore']} />
            <path fill="" d="M240 0v0c132.548 0 240 86.957 240 194.224s-107.452 194.224-240 194.224c-12.729 0-25.223-0.81-37.417-2.355-51.553 51.347-111.086 60.554-170.583 61.907v-12.567c32.126-15.677 58-44.233 58-76.867 0-4.553-0.356-9.024-1.015-13.397-54.279-35.607-88.985-89.994-88.985-150.945 0-107.267 107.452-194.224 240-194.224zM498 435.343c0 27.971 18.157 52.449 46 65.886v10.771c-51.563-1.159-98.893-9.051-143.571-53.063-10.57 1.325-21.397 2.020-32.429 2.020-47.735 0-91.704-12.879-126.807-34.52 72.337-0.253 140.63-23.427 192.417-65.336 26.104-21.126 46.697-45.913 61.207-73.674 15.383-29.433 23.183-60.791 23.183-93.203 0-5.224-0.225-10.418-0.629-15.584 36.285 29.967 58.629 70.811 58.629 115.838 0 52.244-30.079 98.861-77.12 129.382-0.571 3.748-0.88 7.58-0.88 11.483z" />
          </svg>
          <span className={styles['dot']}>...</span>
          <div className={styles['con-logo']}>
            <img src="" />
          </div>
          <div className={styles['con1']}>Call Anytime</div>
          <div className={styles['con11']}>92 666 888 0000</div>
          <hr
            style={{
              position: "absolute",
              marginTop: "-135px",
              width: 280,
              marginLeft: 730,
              borderColor: "#575757"
            }}
          />
          <div className={styles['mail-logo']}>
          </div>
          <div className={styles['mail-1']}>Send Email</div>
          <div className={styles['mail-11']}>needhelp@company.com</div>
          <hr
            style={{
              position: "absolute",
              marginTop: "-90px",
              width: 280,
              marginLeft: 730,
              borderColor: "#575757"
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5em"
            height="2.5em"
            className={styles['msg']}
            viewBox="0 0 24 24"
          >
            <path
              fill="#00c29a"
              d="M22 5.5H9c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h13c1.11 0 2-.89 2-2v-9a2 2 0 0 0-2-2m0 11H9V9.17l6.5 3.33L22 9.17zm-6.5-5.69L9 7.5h13zM5 16.5c0 .17.03.33.05.5H1c-.552 0-1-.45-1-1s.448-1 1-1h4zM3 7h2.05c-.02.17-.05.33-.05.5V9H3c-.55 0-1-.45-1-1s.45-1 1-1m-2 5c0-.55.45-1 1-1h3v2H2c-.55 0-1-.45-1-1"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5em"
            height="2.5em"
            className={styles['loc1']}
            viewBox="0 0 24 24"
          >
            <path
              fill="#00c29a"
              stroke="#00c29a"
              strokeWidth="0px"
              d="M11.007 7.5a2.5 2.5 0 1 0-2.501 3.948m.444 6.547c-.25 0-.497-.067-.716-.195c-2.987-1.915-6.232-4.672-6.232-8.66C2.002 5.225 5.19 2 8.95 2c1.968 0 3.778.883 5.058 2.286M12.62 15.55c-1.36-1.655-1.593-3.318.354-5.336c2.044-1.825 3.222-2.687 3.535-3.207c.314.52 1.51 1.382 3.555 3.207c1.853 1.653 1.737 3.68.376 5.336m-7.82 0h-.522m.522 0h7.82m0 0h.46m-9.873 0h1.07m0 0v5.543c.04.667 0 .979 1.21.891h3.184m4.41-6.434h1.098m-1.098 0v5.644c.116.907-.605.748-1.067.79h-3.343m0 0l.035-2.133"
              color="black"
            />
          </svg>
          <div className={styles['loc-1']}>Visit Office</div>
          <div className={styles['loc-11']}>80 broklyn golden street</div>
        </div>
        <div className={styles['newsletter']}>Newsletter</div>
        <div className={styles['newslet-1']}>
          Lorem ipsum dolor sit ame consect
          <br /> etur pisicing elit sed do.
        </div>
        <input type="name" className={styles['ema']} />
        <div className={styles['email-taking']}> Email Address</div>
        <button type="submit" className={styles['sendd']}>
          Send
        </button>
      </div>
      {/* halpes logo last*/}
      <div className={styles['halpe']}>
        <div className={styles['line']}/>
        <div className={styles['logo-last']} />
        <div className={styles['last-logi']}>
          <img src="https://halpes-nuxt.vercel.app/_nuxt/img/logo-1.9b257c6.png" />
        </div>
        <section className="a">
          <div className={styles['faf']} />
          <div className={styles['faf1']}/>
          <div className={styles['faf2']}/>
          <div className={styles['faf3']}/>

<div className={styles["social"]}>
           <a href="#" className={styles['link']}>
        <svg xmlns="http://www.w3.org/2000/svg" className={styles['twitter']} alt="Twitter" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
</svg> </a> 
          <a href="#" className="link1">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px"  className={styles['face']} alt="Facebook" y="0px" width="100" height="100" viewBox="0 0 50 50">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
</svg>
          </a>
          <a href="#" className="link2">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" className={styles['insta']} alt="Instagram" y="0px" width="100" height="100" viewBox="0 0 32 32">
<path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
</svg> 
 </a>
          <a href="#" className="link3">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"   className={styles['dibb']} alt="Dribble" width="100" height="100" viewBox="0 0 48 48">
<path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 28.142307 7 31.929518 8.4763377 34.875 10.927734 C 32.122374 13.351092 28.974768 15.323142 25.580078 16.835938 C 23.811529 13.61959 21.891654 10.500767 19.736328 7.5585938 C 21.100562 7.2070927 22.524179 7 24 7 z M 16.785156 8.6171875 C 18.997535 11.542724 20.949628 14.664262 22.746094 17.886719 C 19.050465 19.170625 15.137713 20 11 20 C 9.8323552 20 8.6813446 19.922155 7.5390625 19.810547 C 8.7969115 14.835264 12.230939 10.75149 16.785156 8.6171875 z M 37.001953 13.046875 C 39.461176 15.964926 40.9535 19.721786 40.992188 23.837891 C 38.832662 23.296195 36.575941 23 34.25 23 C 32.4219 23 30.655764 23.235969 28.925781 23.574219 C 28.323231 22.178362 27.663283 20.821807 26.984375 19.46875 C 30.643681 17.813906 34.040456 15.676234 37.001953 13.046875 z M 24.177734 20.570312 C 24.811258 21.821635 25.45011 23.063845 26.015625 24.353516 C 19.953229 26.24965 14.749259 30.09875 11.257812 35.238281 C 8.6153572 32.243192 7 28.319322 7 24 C 7 23.585614 7.0335222 23.180292 7.0625 22.773438 C 8.3577913 22.906235 9.665848 23 11 23 C 15.643379 23 20.045102 22.063249 24.177734 20.570312 z M 34.25 26 C 36.498791 26 38.668342 26.319367 40.738281 26.882812 C 39.953494 31.489342 37.336086 35.457573 33.644531 38.001953 C 32.755328 34.064901 31.510607 30.269114 30.085938 26.5625 C 31.460152 26.325929 32.807024 26 34.25 26 z M 27.091797 27.125 C 28.662683 31.125628 30.006215 35.241408 30.90625 39.53125 C 28.795754 40.468547 26.462824 41 24 41 C 20.010678 41 16.357113 39.622608 13.460938 37.332031 C 16.608874 32.477365 21.430763 28.841138 27.091797 27.125 z"></path>
</svg>
          </a>
        </div>
          <div className={styles['cr']}>
            © Copyright 2021 by<span className={styles['hell']}> BracketWeb</span>
          </div>
        </section>
      </div>
</div>
    </main>
  );
};
