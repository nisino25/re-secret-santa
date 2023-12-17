<template>
    
  <div class="background" :style="backgroundStyle">
    <div class="modal"  :class="{ showingTab: showingTab !== undefined }" id="modal">
      
      <!-- <button @click="slideBackground"  :style="{ 'background-color': showLeft ? '#207269' : '#D76E6E'}"> -->
        <div class="button-container">
          
          <!-- <div class="child create-button" @click="showingTab = 'create'"> -->
          <div class="child create-button" @click="showingTab = 'create'">
            <i class="fa-solid fa-plus"></i>
            <br>
            <span>
              Create room 
            </span> 
          </div>
  
          <div class="child join-button" @click="showingTab = 'join'" >
            <i class="fa-solid fa-door-open"></i>
            <br>
            <span>
              Join room 
            </span> 
          </div>
  
          <div class="child check-button" @click="showingTab = 'check'">
            <i class="fa-solid fa-magnifying-glass"></i>
            <br>
            <span>
              Check room 
            </span> 
          </div>

          <div class="child create-button" @click="goBackToHome()" :style="{ opacity: showingTab ? '1' : '0',pointerEvents: showingTab ? 'auto' : 'none'}">
            <i class="fa-solid fa-home" :style="{ fontSize: showingTab ? '25px' : '0'}" id="home-icon"></i>
          </div>

          

        </div>

        <div class="main-content" :class="{ 'main-content-visible': showingTab }" id="main-content-modal">
          <template v-if="showingTab == 'create'">
            <h2>Creating A Room</h2>
            <div class="input-table">
              
              <div class="section-row">
                <div class="section-row-left">
                  <i class="fa-solid fa-user-tie"></i>
                </div>
                <div class="section-row-right">
                  <input type="text">
                </div>
              </div>

              <div class="section-row">
                <div class="section-row-left">
                  <i class="fa-solid fa-calendar-alt"></i>
                </div>
                <div class="section-row-right">
                  <input type="text">
                </div>
              </div>

              <div class="section-row">
                <div class="section-row-left">
                  <i class="fa-solid fa-map-marker-alt"></i>
                </div>
                <div class="section-row-right">
                  <input type="text">
                </div>
              </div>

              <div class="section-row">
                <div class="section-row-left">
                  <i class="fa-solid fa-users"></i>
                </div>
                <div class="section-row-right">
                  <input type="text">
                </div>
              </div>

              <div class="section-row">
                <div class="section-row-left">
                  <i class="fa-solid fa-tag"></i>
                </div>
                <div class="section-row-right">
                  <input type="text">
                </div>
              </div>
              
            </div>
          </template>

          <template v-if="showingTab == 'join'">
            <h2>Join A Room</h2>
            <div class="input-table">
              
              <div class="section-row">
                <div class="section-row-left">
                  <i class="fas fa-user"></i>
                </div>
                <div class="section-row-right">
                  <input type="text">
                </div>
              </div>

              <div class="section-row">
                <div class="section-row-left">
                  <i class="fas fa-gift"></i>
                </div>
                <div class="section-row-right">
                  <input type="text">
                </div>
              </div>

              <div class="section-row">
                <div class="section-row-left">
                  <i class="fas fa-exclamation-triangle"></i>
                </div>
                <div class="section-row-right">
                  <input type="text">
                </div>
              </div>

              <div class="section-row">
                <div class="section-row-left">
                  <!-- <i class="fas fa-exclamation-triangle"></i> -->
                  <i class="fas fa-check" style="color: green;"></i> <!-- Green checkmark icon -->
                  <i class="fas fa-times" style="color: red;"></i>
                </div>
                <div class="section-row-right">
                  <input type="text">
                </div>
              </div>

              <div class="avatar-container">
                <div v-for="(avatar, index) in avatars" :key="index" @click="selectAvatar(index)" v-html="avatar"></div>
                <div class="reload-button" @click="generateAvatars">
                  <i class="fas fa-sync"></i>
                </div>
              </div>

            </div>
          </template>

          <template v-if="showingTab == 'check'">
            <h2>Check A Room</h2>
              <div class="members-list">
                <div class="member-row">
                  <div class="member-row-top">
                    <div class="member-row-left-side">
                      <p>Nozomu Ando</p>
                    </div>
                    <div class="member-row-right-side">
                      <div class="profile-container">
                        <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231 231"><path d="M33.83,33.83a115.5,115.5,0,1,1,0,163.34,115.49,115.49,0,0,1,0-163.34Z" style="fill:#643869;"></path><path d="m115.5 51.75a63.75 63.75 0 0 0-10.5 126.63v14.09a115.5 115.5 0 0 0-53.729 19.027 115.5 115.5 0 0 0 128.46 0 115.5 115.5 0 0 0-53.729-19.029v-14.084a63.75 63.75 0 0 0 53.25-62.881 63.75 63.75 0 0 0-63.65-63.75 63.75 63.75 0 0 0-0.09961 0z" style="fill:#c36c00;"></path><path d="M61.11,205.59l3.49,3.69-6.26,6.6A115.45,115.45,0,0,0,72,222.51v-22a115.19,115.19,0,0,0-10.85,5.1Z" style="fill:#e000cb;"></path><path d="M93.24,228.85V199l-4-4A114.43,114.43,0,0,0,72,200.49v22a114.43,114.43,0,0,0,21.28,6.34Z" style="fill:#fff;"></path><path d="m159 222.51v-22a114.63 114.63 0 0 0-17.25-5.51l-4 4v29.86a114.16 114.16 0 0 0 21.25-6.35z" style="fill:#fff;"></path><path d="m169.89 205.59-3.49 3.69 6.26 6.6a115.45 115.45 0 0 1-13.66 6.63v-22a115.19 115.19 0 0 1 10.85 5.1z" style="fill:#e000cb;"></path><path d="M115.5,219.62A28.5,28.5,0,0,1,87.25,195c2.93-.74,5.92-1.36,8.94-1.87a19.41,19.41,0,0,0,38.62,0c3,.51,6,1.13,8.94,1.87a28.49,28.49,0,0,1-28.25,24.63Z" style="fill:#ffce1c;"></path><path d="m137.38 11.148c-12.23 1.9593-18.511 14.606-43.436 9.4915-11.285-3.2054-16.406-3.573-20.389 0.58594-4.1548 4.3384-7.033 12.435-9.8184 21.706-2.1354 7.4136-3.7187 14.381-4.7461 21.646h112.7c-3.4878-24.293-10.822-43.281-25.182-51.061-3.5314-1.623-6.5274-2.2959-9.1289-2.3613z" style="fill:#583D00;"></path><path d="m114.37 43.383c-19.445 0.088-38.524 2.0724-52.379 5.6992-1.2766 4.5795-2.4317 10.169-3.2285 16.807h113.11c-0.83731-6.0107-1.9164-11.674-3.3184-16.924-15.229-3.8842-34.873-5.6693-54.18-5.582z" style="fill:#AF892E;"></path><path d="m115.5 55.773c-58.39 0-105.73 15.476-105.73 34.57h0.0312c0 11.295 16.496 21.319 42.126 27.627-0.10331-7.7704 2.788-21.904 5.2734-31.031 6.0935-1.7168 6.9294-1.8971 13.167-2.9919 14.874-2.8256 29.99-4.2037 45.133-4.1153 15.143-0.0884 30.259 1.2897 45.133 4.1153 6.2372 1.0947 7.2065 1.2751 13.3 2.9919 2.4854 9.1267 5.3768 23.26 5.2734 31.031 25.63-6.3082 41.993-16.332 41.993-27.627h0.0312c0-19.093-47.34-34.57-105.73-34.57z" style="fill:#462D00;"></path><path d="m72.088 83.533c-6.9765 1.1147-13.357 2.856-18.439 4.3477-1.1861 7.415-2.0038 18.858-1.8926 26.293 4.3278-0.62795 10.155-1.3644 13.295-1.6465-0.40554 0.30198 2.7344-17.827 7.0371-28.994zm86.824 0c4.3028 11.167 7.4426 29.296 7.0371 28.994 3.1396 0.28213 8.9671 1.0185 13.295 1.6465 0.11119-7.4351-0.70652-18.878-1.8926-26.293-5.0822-1.4916-11.463-3.2329-18.439-4.3477z" style="fill:#a0a0a0;"></path><line x1="85.29" x2="85.29" y1="98.73" y2="109.79" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:8.7999px;stroke:black;"></line><path d="m108.28 72.16h62.18c9.19 0 13.32 1.21 14.71 8.52 3.61 18.95 2.2 33.49-0.44 43.75a65.07 65.07 0 0 1-5.89 14.78 73.52 73.52 0 0 1-7.06 10.26c-1.8 2.27-5.17 1.21-4.19-1.09 0.14-0.47 0.27-1 0.4-1.48a14.29 14.29 0 0 0 0.52-6.62 12.52 12.52 0 0 0-3.88-6.3c-4.17-3.9-12.81-8.71-32.53-13.66-6.4-1.6-10.69-2.24-11.76-2.79a7.08 7.08 0 0 1-3.85-6.31v-9c0-2.39 0.18-4.55-1.56-6.57s-4.16-2.13-6.65-2.14a6 6 0 0 1-6-6v-9.35a6 6 0 0 1 6-6z" style="fill:#1df7ff;opacity:0.64;"></path><path d="m135.9 98.73v9.27m15.22-9.29v9.29" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:7.7998px;stroke:#fcff2c;"></path><path d="m126.28 149.82c-6.16 2.43-15.52 2.42-21.56 0" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:5.9998px;stroke:#000;"></path></svg></div>
                      </div>
                    </div>
                  </div>
                  <div class="member-row-bottom">
                    <div class="member-row-bottom-left">
                      <i class="fas fa-gift" style="color: green;"></i>                      
                    </div>
                    <div class="member-detail-button">
                      Check WishList  &rarr;
                    </div>
                  </div>
                </div>

                <div class="member-row">
                  <div class="member-row-top">
                    <div class="member-row-left-side">
                      <p>Rebecca Ando</p>
                    </div>
                    <div class="member-row-right-side">
                      <div class="profile-container">
                        <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231 231"><path d="M33.83,33.83a115.5,115.5,0,1,1,0,163.34,115.49,115.49,0,0,1,0-163.34Z" style="fill:#FFC107;"></path><path d="m115.5 51.75a63.75 63.75 0 0 0-10.5 126.63v14.09a115.5 115.5 0 0 0-53.729 19.027 115.5 115.5 0 0 0 128.46 0 115.5 115.5 0 0 0-53.729-19.029v-14.084a63.75 63.75 0 0 0 53.25-62.881 63.75 63.75 0 0 0-63.65-63.75 63.75 63.75 0 0 0-0.09961 0z" style="fill:#ffce8b;"></path><path d="m141.75 195a114.79 114.79 0 0 1 38 16.5 115.53 115.53 0 0 1-128.46 0 114.79 114.79 0 0 1 38-16.5l15.71 15.75h21z" style="fill:#212121;"></path><path d="m89.291 195a114.79 114.79 0 0 0-38.002 16.5 115.53 115.53 0 0 0 38.002 16.482zm52.434 0v32.982a115.53 115.53 0 0 0 38-16.482 114.79 114.79 0 0 0-38-16.5z" style="fill:#fff;"></path><path d="m157.15 199.75c0.2548 7.4501 1.54 14.855 4.9512 21.432a115.53 115.53 0 0 0 17.619-9.6797 114.79 114.79 0 0 0-22.57-11.752zm-83.295 2e-3a114.79 114.79 0 0 0-22.57 11.75 115.53 115.53 0 0 0 17.621 9.6797c3.411-6.5765 4.6944-13.98 4.9492-21.43z" style="fill:#212121;"></path><path d="m99.197 204.97v2e-3l16.302 16.301 16.301-16.301v-2e-3z" style="fill:#fff;"></path><path d="m69.834 33.826c-8.2001-0.0626-16.444 2.6753-23.152 7.7038-8.5298 6.9899-12.159 19.61-12.329 32.68-0.2041 15.476 1.6092 34.752 1.7464 51.915 0.10414 13.047 0.53485 25.984-2.9197 33.995-2.4994 5.81-9.0955 9.6006-16.196 12.311 7.9599 2.8301 25.009 2.8094 33.58 1.5393 10.8-1.59 17.238-6.5294 17.159-22.699-0.0911-15.93-1.3894-29.23-1.559-45.83-0.3208-11.983-1.569-24.291 4.9774-33.987 4.2139-6.1265 10.452-10.521 17.116-13.588 3.9292-1.8575 8.0384-3.3083 12.263-4.3297-6.8718-13.574-18.732-19.618-30.687-19.709z" style="fill:#fff510;"></path><path d="m90.8 76.246c11.918-17.125 31.996-23.218 49.743-17.488 11.81 3.9496 20.692 13.389 22.313 28.237 0.51051 6.2098 0.63413 12.445 0.37007 18.67-0.23973 11.2-0.72946 23.82-1.0995 34.08-0.82005 22.43 0.0593 35.1 24.589 36.3 8.5635 0.32122 17.137-0.22845 25.59-1.6405h-0.0198c-10.74-3.3799-17.98-15.609-19.3-26.289-1.29-10.41-0.6098-23.43-0.7898-38.091-0.1701-14.96 1.0398-29.819 0.28008-42.089-1.414-22.777-14.947-38.505-34.126-45.152-27.813-7.35-51.083 0.091-61.672 17.343-5.4698 8.9112-7.7413 20.07-5.8788 36.121z" style="fill:#fff510;"></path><path d="m86.851 100.39a4.94 4.94 0 1 0 4.9297 5 5 5 0 0 0-4.9297-5zm57.221 0a4.94 4.94 0 1 0 4.9394 4.9394 4.94 4.94 0 0 0-4.9394-4.9394z" style="fill:#000;"></path><path d="m86.207 89.365c-25.504 0-21.503 6.8561-21.035 19.596 0.80177 18.121 17.763 16.514 21.201 16.639 14.758-0.041 20.518-8.227 22.951-22.932 1.8166-10.731-9.251-13.174-23.117-13.303zm58.598 0c-13.866 0.1284-24.936 2.5717-23.119 13.303 2.4332 14.705 8.1936 22.891 22.951 22.932 3.4383-0.125 20.399 1.4828 21.201-16.639 0-18.965-0.47958-19.596-21.033-19.596z" style="fill:none;"></path><path d="m169.87 90.255a0.51 0.51 0 0 0-0.43991-0.52 167.64 167.64 0 0 0-22.6-1.6801c-12 0-27.47 3.7601-30.17 3.7601h-2.4c-1.2499 0-5.29-0.80996-10.45-1.6801a124.35 124.35 0 0 0-19.72-2.08 166.18 166.18 0 0 0-19.31 1.24c-1.56 0.17999-2.69 0.35009-3.2899 0.44009a0.51 0.51 0 0 0-0.44007 0.52l-0.091 6.4501a0.57 0.57 0 0 0 0.33012 0.52l0.73994 0.23992c1.08 0.41992 1.0001 19.85 6.78 24.71 3.4401 2.8599 6.51 4.4899 19.42 4.4899 7.4699 0 12.17-1.9999 16.63-8 3.21-4.32 6.0999-14.55 6.0999-14.55 0.82006-4.07 3.7702-4.52 4.43-4.5801h0.12068c0.11078 0 3.66 0.0593 4.57 4.5801 0 0 2.8599 10.22 6.0699 14.54 4.4601 5.9999 9.1601 8 16.63 8 12.91 0 16-1.63 19.42-4.4901 5.7898-4.86 5.6998-24.29 6.78-24.71l0.73994-0.23993a0.57 0.57 0 0 0 0.32996-0.52l-0.12068-6.4501zm-65 23c-1.9101 4.5-6.8 10.29-13.7 10.64-20.7 0.99985-21.65-4.7401-23-9.3201a31.45 31.45 0 0 1-1.2099-13.18c0.53997-4.5799 1.7-7.2699 3.7801-8.6201a9.3 9.3 0 0 1 4.3499-1.51 85.07 85.07 0 0 1 11.4-0.52 59.23 59.23 0 0 1 9.2099 0.69999c7.37 1.2 12.35 3.7001 12.35 6.1601a46.12 46.12 0 0 1-3.23 15.64zm58 1.3201c-1.34 4.5799-2.29 10.36-23 9.3201-6.91-0.3501-11.81-6.1401-13.71-10.64a46.35 46.35 0 0 1-3.22-15.64c0-3.39 9.43-6.8599 21.56-6.8599 12.13 0 14 0.89996 15.75 1.9999 2.08 1.3502 3.2398 4 3.77 8.6201a31.23 31.23 0 0 1-1.1601 13.17z" style="fill:#000;"></path><path d="m94.19 136.84h42.632a3.7801 3.78 0 0 1 3.7802 3.78v3.22a15.231 15.23 0 0 1-15.211 15.16h-19.781a15.251 15.25 0 0 1-15.221-15.16v-3.22a3.8002 3.8 0 0 1 3.7802-3.78z" style="fill:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px;stroke:#000;"></path><path d="m130.96 136.84v21.16m-30.911-21.16v21.16m10.34-21.16v22.16m10.31-22.2v22.2" style="fill:none;stroke-linecap:round;member-row-bottom-linejoin:round;stroke-width:3px;stroke:#000;"></path></svg></div>
                      </div>
                    </div>
                  </div>
                  <div class="member-row-bottom">
                    <div class="member-row-bottom-left">
                      <i class="fas fa-spinner" style="color: red;"></i>
                    </div>
                    <div class="member-detail-button">
                      Check WishList  &rarr;
                    </div>
                  </div>
                </div>

                <div class="member-row">
                  <div class="member-row-top">
                    <div class="member-row-left-side">
                      <p>Waiting to join...</p>
                    </div>
                    <div class="member-row-right-side">
                      <div class="profile-container">
                        <div class="grey-circle"></div>
                      </div>
                    </div>
                  </div>
                  <div class="member-row-bottom">
                    <div class="member-row-bottom-left">
                      <i class="fas fa-hourglass" style="color: black;"></i>
                    </div>
                    <div class="member-detail-button">
                      Waiting for the person to join
                    </div>
                  </div>
                </div>
                
              </div>
          </template>
        </div>
    </div>
  </div>
</template>

<script>
// import multiavatar from 'multiavatar';

export default{
data() {
  return {
    showLeft: true,
    showingTab: undefined,

    avatars: [],
    selectedAvatar: null,

    baseicPlayersArray:['Nozo','Becca','Koki','Shin','Guest'],

    shuffledOrderArray: [],
    assignments: [],
  };
},
computed: {
  backgroundStyle() {
    return {
      // backgroundImage: 'url(public/assets/background.png)', // Replace with your image path
      
      backgroundPosition: this.showLeft ? 'left center' : 'right center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      transition: 'all 1s ease', // Smooth transition for sliding effect

      
    };
  },
},
methods: {
  slideBackground() {
    this.showLeft = !this.showLeft; 
  },

  generateAvatars() {
    this.avatars = [1, 2, 3,4,5,6,7,8].map(() => window.multiavatar(Math.random().toString()));
  },

  selectAvatar(index) {
    this.selectedAvatar = this.avatars[index];
    console.log(this.selectedAvatar)
  },

  async goBackToHome(){
    // Get the element by its ID
    const element = document.getElementById('main-content-modal');
    const homeIcon = document.getElementById('home-icon');
    const modalElement = document.getElementById('modal');

    // Check if the element exists
    if (element) {
      // Set the opacity to 0 to hide the element
      element.style.opacity = 0;
      homeIcon.style.fontSize = '0px';
      // element.style.transitionDelay = "0s !important";
      element.style.transitionDelay = "0s";

      modalElement.style.height = '15vh'
      modalElement.style.top = '33%'

      setTimeout(() => {
        this.showingTab = undefined;
        element.style.opacity = "";
        element.style.transitionDelay = "";

        modalElement.style.height = ''
        modalElement.style.top = ''
      }, 750); 
    }




    
  },

  // -------------

  randomAlg() {
    console.log(this.baseicPlayersArray); // Check if baseicPlayersArray is correct
    this.shuffledOrderArray = this.shuffleArray([...this.baseicPlayersArray]); // Create a shuffled copy
    // console.log(this.shuffledOrderArray);
    this.assignments = this.assign(this.shuffledOrderArray); // Use the shuffled array
    console.table(this.assignments);
  },


  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array
  },

  assign(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
      const giver = array[i];
      const receiver = array[(i + 1) % array.length]; // Ensure no repetition
      newArray.push({ giver, receiver });
    }

    return newArray
  },


},

mounted(){
  console.clear()
  this.randomAlg()
  this.generateAvatars()
}
};
</script>  
<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
body{
margin: 0;
}
.background {
/* background-image: url('../public/assets/images/background.png'); */
background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../public/assets/images/background.png');
width: 100%;
position: relative;
background-size: 150% 100%;

max-width: 450px;
max-height: 900px;
margin: autoç;
}

.modal{
  position: absolute;
  top: 33%;
  left: 50%;
  transform: translate(-50%,-50%);

  display: block;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 10px;

  width: 80vw;
  height: 15vh;
  
  padding: 20px;
  
  /* align-items: center; */

  transition: all .75s ease-in-out;

  overflow: scroll;


}






.modal .button-container{
  position: relative;
  /* display: grid; */
  /* grid-template-columns: 25% 25% 25%; */
  justify-content: space-between;
  width: 100%;
  
  transition: all .75s ease-in-out;
  height: 10px;

}

.showingTab{
  top: 50%;
  height: 75vh;
  transform: translate(-50%,-50%);
}


.button-container button span{
  opacity: 1;
}

/* .showingTab .button-container{
  width: 100%;
} */

.showingTab .button-container .child span{
  opacity: 0;
  transition: all .75s ease-in-out;
}

.showingTab .button-container .child i{
  font-size: 0;
  transition: all .75s ease-in-out;
  /* transition-delay: .75s; */
}



.modal .button-container button{
  /* background: #207269; */
  border-radius: 50vw;
  font-family: 'Playfair Display', serif;
  font-weight: 700; 
  font-size: 18px; /* Adjust the font size as needed */
  color: #ffffff; /* Set the text color */

  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); 
  border: 0;

  



}

.button-container .child{
  position: absolute;
  width: 80px;
  text-align: center;
  z-index: 2;

  transition: all .75s ease-in-out;
  transition-delay: .75s; /* Delay the transition by 1 second */

}

.button-container .child i{
  opacity: 1;
  width: 100%;
  min-width: 50px;
  aspect-ratio: 1/1;

  background: #01796f;
  color: white;
  /* display: block; */
  border-radius: 50%;
  align-items: center;
  line-height: 1;
  display: flex;
  justify-content: center;
  text-align: center;
  /* padding: 20px; */
  margin-bottom: 10px;

  font-size: 2em;

}

.button-container .create-button{
  left: 0;
  transform: translateX(0%)
}

.button-container .join-button{
  right: 50%;
  transform: translateX(50%)
}

.button-container .child:nth-child(3){
  right: 0 !important;
  
}

.showingTab .create-button{
  left: 100%;
  transform: translateX(-100%)
}

.showingTab .join-button{
  right: 0%;
  transform: unset;
  
}

.showingTab .child{
  width: 50px;
  font-size: .8em;
}

.main-content{
  transition: .75s;
  pointer-events: none;
  transition-delay:1.5s;
  opacity: 0;
}

.main-content-visible{
  opacity: 1;
  pointer-events: unset;
}

.main-content h2{
  margin-top: 0;
  margin-bottom: 50px;
}

.main-content .input-table .section-row{
  display: grid;
  width: 100%;
  /* background: red; */
  grid-template-columns: 20% 80%;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin-bottom: 20px;
  
  padding-bottom: 20px;
  border-bottom: 1px solid grey;
}

.main-content .input-table .section-row .section-row-left i{
  font-size: 3em;
  color: #01796f;
}

.main-content .input-table .section-row input{
  width: 85%;

}

.avatar-container{
  width: 95%;
  margin: auto;
  display: grid;

  grid-template-columns: 28% 28% 28%;
  justify-content: space-between;
}

.avatar-container .reload-button{
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

}

/* ---------------------------------- */

.members-list .member-row{
  margin-bottom: 40px;
  background: #FEE9C5;
  border-radius: 10px;
  padding: 10px 20px;

  /* overflow: hidden; */
  position: relative;
}

.members-list .member-row .member-row-top{
  display: grid;
  grid-template-columns: 65% 30%;
  justify-content: space-between;

  
  position: relative;
}

.members-list .member-row .member-row-left-side p{
  font-size: 1.5em;
  margin: 15px 0;
}

.members-list .member-row .member-row-right-side{
  position: relative;
}

.members-list .member-row .profile-container{
  transform: translateY(-40%);
  width: 100%;
  height: auto;
  position: absolute;
}

.member-row-bottom{
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-between;
}

.member-row-bottom i{
  font-size: 2em;
}


@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Apply the animation to the icon */
.fas.fa-spinner {
  animation: spin 4s linear infinite;
}



.member-detail-button{
  position: absolute;
  right: 0;
  bottom: 0;
  color:#FEE9C5;

  background: #01796f;
  padding: 7.5px 15px;

  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;

  /* border-bottom-left-radius: 5px;
  border-top-right-radius: 5px; */


}

.grey-circle{
  background:gray;
  width: 100%;
  aspect-ratio: 1/1;
  display: block;
  border-radius: 50%;
}



</style>
