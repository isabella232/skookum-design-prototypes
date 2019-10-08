<template>
  <div>
    <div class="mobile-nav">
      <a class="hamburger" v-on:click="toggleNav()">
         <span></span>
         <span></span>
         <span></span>
         <span></span>
      </a>
    </div>
    <nav aria-label="Main navigation" role="navigation" @mouseenter="openNav()" @mouseleave="closeNav()" v-bind:class="{ active: navOpen }">
      <router-link class="home-nav hide-mobile" to="/" @click.native="closeNav()">
        <transition name="logoswap" mode="out-in">
          <img class="logo" alt="Logo" v-bind:src="navLogo" v-bind:key="navLogo" />
        </transition> 
      </router-link>

      <transition-group tag="ul" name="fade" appear>
         <li key="home-link" class="hide-desktop">
            <router-link to="/" v-on:click.native="closeNav()">
               <img class="logo" alt="Logo" v-bind:src="homeIcon"  />
               <span>Home</span>
            </router-link>
         </li>
         <li key="about-link">
            <router-link to="/about" @click.native="closeNav()">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" x="0px" y="0px">
                  <path d="M50,5A45,45,0,1,0,95,50,45.05077,45.05077,0,0,0,50,5Zm0,84A39,39,0,1,1,89,50,39.0439,39.0439,0,0,1,50,89Z"/>
                  <path d="M57.99994,67.00031H55.00012v-28a2,2,0,0,0-2-2h-11a5,5,0,1,0,0,10h3v20H41.99994a5,5,0,1,0,0,10h16a5,5,0,0,0,0-10Z"/>
                  <circle cx="50" cy="25" r="5"/>
               </svg>
               <span>About</span>
            </router-link>
         </li>
      </transition-group>
    </nav>
  </div>
</template>

<script>
import EventBus from '@/event-bus';

export default {
  name: "Navbar",
  data(){
    return {
      navOpen: false,
      navLogo: '/img/logo.svg',
      homeIcon: '/img/home-icon.svg'
    }
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen
      EventBus.$emit('navToggle', this.navOpen)
    },
    openNav() {
      this.navOpen = true;
      this.navLogo = this.homeIcon;
      EventBus.$emit('navOpen', this.navOpen)
    },
    closeNav() {
      this.navOpen = false;
      this.navLogo = '/img/logo.svg';
      EventBus.$emit('navClose', this.navOpen)
    }
  }
};
</script>

<style lang="scss">
   nav {
      width: $navWidth;
      position: fixed;
      left: 0;
      top: 0;
      min-height: 100%;
      background: $grayDark;
      color: $white;
      overflow: hidden;
      transition: width .5s ease;
      z-index: 500;
      @include mediumFont;
      .home-nav {
         display: flex;
         justify-content: center;
         align-items: center;
         margin: 1rem auto;
         padding: 1rem;
         color: $white;
         .logo {
            height: 2.8rem;
         }
      }
      a {
         color: $white;
         white-space: nowrap;
         display: flex;
         align-content: center;
         align-items: center;
         padding: 1.5rem 1.4rem;
         background: transparent;
         box-shadow: none;
         transition: all .6s ease;
         border-top: 1px solid transparent;
         border-bottom: 1px solid transparent;
         @include regularFont;
         svg {
            width: 1.5rem;
            height: auto;
            flex-shrink: 0;
            fill: $white;
            transition: all .6s;
         }
         &:focus {
            outline: none;
            border-top-color: $grayDark;
            border-bottom-color: rgba($white, .2);
            box-shadow: inset 0 8px 6px -6px rgba($black, .5);
         }
         &:hover {
            background: $gray;
            border-top-color: $grayDark;
            border-bottom-color: rgba($white, .2);
            box-shadow: inset 0 8px 6px -6px rgba($black, .5);
            svg {
               fill: $primaryColor;
            }
         }
      }
      ul {
         margin: 0;
         padding: 0;
         list-style: none;
         li {
            margin: .5rem 0;
            padding: 0;
            span {
               opacity: 0;
               margin-left: .5rem;
               transition-delay: .1s;
            }
            &:nth-child(2) span {
               transition-delay: .15s;
            }
            &:nth-child(3) span {
               transition-delay: .2s;
            }
            &:nth-child(4) span {
               transition-delay: .25s;
            }
            &:nth-child(5) span {
               transition-delay: .3s;
            }
         }
      }
      .nav-active & {
         width: $navWidthOpen;
         //background: $grayLight;
         overflow: visible;
         ul li {
            span {
               opacity: 1;
            }
         }
      }
   }

   @include breakpoint(md-down) {
      nav {
         width: 0;
         height: 100%;
         padding-top: 4rem;
         backdrop-filter: blur(10px);
         a {
            font-size: 1.5rem;
            justify-content: center;
            @include regularFont;
            img {
               width: 1.5rem;
               height: auto;
               flex-shrink: 0;
            }
         }
         ul li {
            transition: opacity;
            opacity: 0;
            transition-delay: .1s;
            &:nth-child(2) {
               transition-delay: .15s;
            }
            &:nth-child(3) {
               transition-delay: .2s;
            }
            &:nth-child(4) {
               transition-delay: .25s;
            }
            &:nth-child(5) {
               transition-delay: .3s;
            }
         }
         .nav-active & {
            width: 100%;
            li {
               width: initial;
               opacity: 1;
            }
         }
      }
      .mobile-nav {
         background: $grayLight;
         width: 40px;
         height: 40px;
         position: fixed;
         top: 0;
         left: 0;
         padding: 9px 8px 8px 7px;
         z-index: 505;
         display: block;
      }
      .hamburger {
         width: 26px;
         height: 23px;
         top: 0;
         left: 0;
         // transform: rotate(0deg);
         transition: 0.5s ease-in-out;
         cursor: pointer;
         display: block;
         position: relative;
         span {
         display: block;
         position: absolute;
         height: 2px;
         width: 100%;
         background: $white;
         opacity: 1;
         left: 0;
         transform: rotate(0deg);
         transition: 0.25s ease-in-out;
         &:nth-child(1) {
            top: 0px;
         }
         &:nth-child(2),
         &:nth-child(3) {
            top: 9px;
         }
         &:nth-child(4) {
            top: 18px;
         }
         }
         .nav-active & span {
         background: $white;
         &:nth-child(1) {
            top: 9px;
            width: 0%;
            left: 50%;
         }
         &:nth-child(2) {
            transform: rotate(45deg);
         }
         &:nth-child(3) {
            transform: rotate(-45deg);
         }
         &:nth-child(4) {
            top: 9px;
            width: 0%;
            left: 50%;
         }
         }
      }
   }

   @include breakpoint(md) {
      .mobile-nav {
         display: none;
      }
   }
</style>
