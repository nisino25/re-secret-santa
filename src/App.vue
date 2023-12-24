<template>
    
  <div class="background" :style="backgroundStyle">
    <div class="modal"  :class="{ showingTab: showingTab !== undefined }" id="modal">

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
                  <input class="longer-input" type="text" placeholder="Host name with one word..." v-model="hostName" >
                </div>
              </div>

              <div class="section-row">
                <div class="section-row-left">
                  <i class="fa-solid fa-lock"></i>
                </div>
                <div class="section-row-right">
                  <input class="longer-input" type="number" placeholder="Password with 6 digits..." v-model="hostPassword" >
                </div>
              </div>

              <div class="section-row">
                <div class="section-row-left">
                  <i class="fa-solid fa-map-marker-alt"></i>
                </div>
                <div class="section-row-right">
                  <input class="longer-input" type="text"  placeholder="Location..." v-model="location" >
                </div>
              </div>

              <div class="section-row">
                <div class="section-row-left">
                  <i class="fa-solid fa-calendar-alt"></i>
                </div>
                <div class="section-row-right">
                  <input type="date" id="date" name="date" v-model="selectedDate">
                </div>
              </div>

              <div class="section-row">
                <div class="section-row-left">
                  <i class="fa-solid fa-users"></i>
                </div>
                <div class="section-row-right">
                  <input type="number"  placeholder="How many people..." v-model="groupNumber" >
                </div>
              </div>

              <div class="section-row">
                <div class="section-row-left">
                  <i class="fa-solid fa-tag"></i>
                </div>
                <div class="section-row-right">
                  <input type="number"  placeholder="Minimum price..." v-model="minimumPrice" >
                </div>
              </div>

              <div id="checkButton" @click="checkInput('create')">
                Confirm 
              </div>
              
            </div>
          </template>

          <template v-if="showingTab == 'join'">

            <template v-if="!roomCode">
              <h2>Type your room code</h2>
              <div class="input-table">
                <div class="section-row" style="width: 100%; display: block; border-bottom: unset; margin: auto; text-align: center;">
                  <input stlye="width:100%;" type="text" placeholder="Room code..." v-model="tempRoomCode">
                </div>
                <div id="checkButton" @click="checkInput('join')">
                  Confirm
                </div>
              </div>
            </template>

            <template v-else>
              <h2>Joining... [{{ roomCode }}]</h2>
              <div class="input-table">
                
                <div class="section-row">
                  <div class="section-row-left">
                    <i class="fas fa-user"></i>
                  </div>
                  <div class="section-row-right">
                    <input type="text" placeholder="Usernem: Type with one word" v-model="tempName" class="longer-input">
                  </div>
                </div>

                <div class="section-row">
                  <div class="section-row-left">
                    <i class="fa-solid fa-lock"></i>
                  </div>
                  <div class="section-row-right">
                    <input class="longer-input" type="number" placeholder="Password with 6 digits..." v-model="tempPassword" >
                  </div>
                </div>

                <div class="section-row">
                  <div class="section-row-left">
                    <i class="fas fa-gift"></i>
                  </div>
                  <div class="section-row-right">
                    <input class="longer-input"  type="text" placeholder="Wish List..." v-model="tempWishList">
                  </div>
                </div>

                <div class="section-row">
                  <div class="section-row-left">
                    <i class="fas fa-exclamation-triangle"></i>
                  </div>
                  <div class="section-row-right">
                    <input class="longer-input" type="text" placeholder="Allergies etc..." v-model="tempWarningList">
                  </div>
                </div>

                <!-- <div class="section-row">
                  <div class="section-row-left">
                    <i class="fas fa-check" style="color: green;"></i>
                    <i class="fas fa-times" style="color: red;"></i>
                  </div>
                  <div class="section-row-right">
                    <input type="text">
                  </div>
                </div> -->

                <div class="avatar-container">
                  <div v-for="(avatar, index) in avatars" :key="index" @click="selectAvatar(avatar.randomString)" v-html="avatar.avatar"  :style="{ opacity: tempAvatarCode !== null && tempAvatarCode !== avatar.randomString ? '0.3' : '1' }"></div>

                  <div class="reload-button" @click="generateAvatars">
                    <i class="fas fa-sync"></i>
                  </div>
                </div>

                <div id="checkButton" @click="checkInput('register')" style="margin: 0px auto 0px;">
                  Register 
                </div>

              </div>

            </template>
            
           
          </template>

          <template v-if="showingTab == 'check'">

            <template v-if="!roomCode">
              <h2>Type your room code</h2>
              <div class="input-table">
                <div class="section-row" style="width: 100%; display: block; border-bottom: unset; margin: auto; text-align: center;">
                  <input stlye="width:100%;" type="text" placeholder="Room code..." v-model="tempRoomCode">
                </div>
                <div id="checkButton" @click="checkInput('check')">
                  Confirm
                </div>
              </div>
            </template>

            <template v-else>
              <h2  @click="copyUrlToClipboard()">Checkcing [{{roomCode}}]</h2>

              <strong style="display: block; margin: -20px auto 20px;" v-if="roomStatus == 'recruting'" @click="closeRecruting">Done Recruting?<br>Minimum Price is {{ minimumPrice }}¥</strong>

              <strong style="display: block; margin: -20px auto 20px;" v-if="roomStatus == 'alredy assigned'">Alredy assigned. Click Your avatar <br> to see your secret santa.</strong>

              <div class="members-list">
                <div class="member-row"  v-for="(member, index) in groupMembers" :key="index">
                  <div class="member-row-top">
                    <div class="member-row-left-side">
                      <p>{{ member.name }}</p>
                    </div>
                    <div class="member-row-right-side">
                      <div class="profile-container" @click="checkYourTarget(member)">
                        <div v-html="regenerate(member.avatarCode)">
                        </div>
                      </div>  
                    </div>
                  </div>
                  <div class="member-row-bottom">
                    <div class="member-row-bottom-left">
                      <i v-if="member.isGiftReady" class="fas fa-gift" style="color: green;"></i>
                      <i v-else class="fas fa-spinner" style="color: red;" @click="changeGiftStatus(member,index)"></i>
                    </div>
                    <div class="member-detail-button" @click="checkDetail(member)">
                      Check Detail  &rarr;
                    </div>
                  </div>
                </div>

                <template v-if="placeholderCount">
                  <div v-for="index in placeholderCount" :key="index" class="member-row">
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

                </template>
              </div>

            </template>
            
          </template>

          <template v-if="showingTab == 'confirm'">
            <h2>Room Confirmation</h2>
            <div class="input-table confirm-table">
              
              <div class="section-row">
                <div class="section-row-left">
                  <i class="fa-solid fa-user-tie"></i>
                </div>
                <div class="section-row-right">
                  <span>
                    Host Name: 
                  </span>
                  <h4>{{hostName}}</h4>
                </div>
              </div>

              <div class="section-row">
                <div class="section-row-left">
                  <i class="fa-solid fa-map-marker-alt"></i>
                </div>
                <div class="section-row-right">
                  <span>
                    Location: 
                  </span>
                  <h4>{{location}}</h4>
                </div>
              </div>

              <div class="section-row">
                <div class="section-row-left">
                  <i class="fa-solid fa-calendar-alt"></i>
                </div>
                <div class="section-row-right">
                  <span>
                    Date: 
                  </span>
                  <h4>{{selectedDate}}</h4>
                </div>
              </div>

              <div class="section-row">
                <div class="section-row-left">
                  <i class="fa-solid fa-users"></i>
                </div>
                <div class="section-row-right">
                  <span>                  
                    Group Number: 
                  </span>
                  <h4>{{groupNumber}}人</h4>
                </div>
              </div>

              <div class="section-row">
                <div class="section-row-left">
                  <i class="fa-solid fa-tag"></i>
                </div>
                <div class="section-row-right">
                  <span>
                    Minimum Price: 
                  </span>
                  <h4>{{minimumPrice}}¥</h4>
                </div>
              </div>

              <div id="checkButton" @click="createRoom()">
                Confirm 
              </div>
              
            </div>
          </template>

        </div>
    </div>
  </div>
</template>

<script>
  import db from './firebase';  // your Firebase setup
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

        groupName: undefined,

        hostName: '',
        hostPassword: '',
        selectedDate: null,
        location: '',
        groupNumber: null,
        minimumPrice: null,

        roomCode: null,
        tempRoomCode: null,

        tempName: '',
        tempPassword: '',
        tempWishList: '',
        tempWarningList: '',
        tempAvatarCode: null,

        groupMembers: [],
        roomStatus: null,

        

    };
  },
  computed: {
    backgroundStyle() {

      // if(this.showingTab == "check"){
      //   return {
      //     backgroundPosition: this.showLeft ? 'left center' : 'right center',
      //     backgroundRepeat: 'no-repeat',
      //     height: '100vh',
      //     transition: 'all 1s ease', // Smooth transition for sliding effect
      //   }
      // }
      return {
        // backgroundImage: 'url(public/assets/background.png)', // Replace with your image path
        
        backgroundPosition: this.showingTab !== "check" ? 'left center' : 'right center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        transition: 'all 1s ease', // Smooth transition for sliding effect

        
      };
    },

    placeholderCount() {
      // if(!this.groupNumnber || !this.groupMembers) return 

      // return 10
      if(!this.groupMembers) return
      if(this.groupNumber - this.groupMembers?.length < 0){
        return 0
      }
      return this.groupNumber - this.groupMembers?.length;
    }
  },

  methods: {
    slideBackground() {
      this.showLeft = !this.showLeft; 
    },

    generateAvatars() {
      this.tempAvatarCode = null;

      this.avatars = [1, 2, 3, 4, 5].map(() => {
        const randomString = Math.random().toString();
        return {
          avatar: window.multiavatar(randomString),
          randomString: randomString
        };
      });


      // this.avatars = [1,2,3,4,5].map(() => window.multiavatar(Math.random().toString()));
      // console.log(Math.random().toString())
    },

    regenerate(randomString) {
      return window.multiavatar(randomString);
    },

    selectAvatar(randomString) {
      this.tempAvatarCode = randomString;
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

    // -------------------

    randomAlg() {
      // console.log(this.groupMembers); // Check if baseicPlayersArray is correct
      this.shuffledOrderArray = this.shuffleArray([...this.groupMembers]); // Create a shuffled copy
      // consxsole.table(this.shuffledOrderArray);
      // console.log(this.shuffledOrderArray);
      this.assignments = this.assign(this.shuffledOrderArray); // Use the shuffled array
      // console.table(this.assignments);

      this.groupMembers.forEach(member => {
        // Find the assignment where this member is the giver
        let assignment = this.assignments.find(a => a.giver === member.name);

        // If an assignment is found, set the receiver as the target for this member
        if (assignment) {
          member.target = assignment.receiver;
        }
      });

      // console.table(this.groupMembers)
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
        const giver = array[i].name;
        const receiver = array[(i + 1) % array.length].name; // Ensure no repetition
        newArray.push({ giver, receiver });
      }

      return newArray
    },

    // ----------------------------
    async checkInput(option){

      if(option == 'create'){
        
        // if(!this.groupName) return 

        if(this.hostName.length == 0) return 

        // if(!this.isOneWord(this.hostName)) return alert('Host name needs to be one word') 

        // if(!this.validatePassword(this.password)) return alert('Password needs to be 6 digits number')
          
        if(!this.selectedDate) return alert('here1')

        if(!this.selectedDate) return alert('here1')

        if(this.location.length <0) return alert('here2')
                  
        if(!this.minimumPrice) return alert('here3')

        console.log('hey nice inptu')
        this.showingTab = 'confirm'
        return 
                       
        
      }else if(option == 'join'){

        const querySnapshot = await db.collection('groups').where('groupName', '==', this.tempRoomCode).get();

        if (!querySnapshot.empty) {
          alert('Welcome!')
          this.roomCode = this.tempRoomCode
        }else{
          alert('Wrong input')
        }
      }else if(option == 'register'){

        if(this.tempName.length == 0) return 

        // if(!this.isOneWord(this.tempName)) return alert('Host name needs to be one word') 

        // if(!this.validatePassword(this.tempPassword)) return alert('Password needs to be 6 digits number')

        if(!this.tempAvatarCode) return alert('Pick Avatar pls')

        const userResponse = confirm("Do you want to continue with this function?");
  
        if (!userResponse) return 

        const querySnapshot = await db.collection('groups').where('groupName', '==', this.tempRoomCode).get();

        querySnapshot.forEach((doc) => {

          this.hostName = doc.data().hostName;
          this.hostPassword = doc.data().hostPassword;
          this.groupMembers = doc.data().groupMembers;

        });

        if( this.groupMembers.some(member => member.name === this.tempName)){
          return alert('The name alredy exists in this group! ')
        }

        if(this.tempName == this.hostName ){
          if(this.tempPassword !== this.hostPassword){
            return alert('If you are host then the password has to be the same as room passwrod!')
          }
        }

        // Data to be added
        const dataToAdd = {
          name: this.tempName,
          password: this.tempPassword,
          avatarCode: this.tempAvatarCode,
          WishList: this.tempWishList,
          Warning: this.tempWarningList,
          isGiftReady: false,
          target: null,


          // Add more fields as needed
        };

        // await this.addMemberToGroup('groups', dataToAdd);
        await this.addMemberToGroupBasedOnGroupName(dataToAdd)

        this.showingTab = 'check'
        // this.checkInput('check')
        // this.roomCode = this.tempRoomCode
        // this.
        // this.tempRoomCode = null





        // const querySnapshot = await db.collection('groups').where('groupName', '==', this.tempRoomCode).get();
        // querySnapshot.forEach((doc) => {
        //   // Access the data of each document
        //   // Check if 'groupMembers' is a property of the 'groupData' object
        //   if ('groupMembers' in groupData) {
        //     const groupMembers = groupData.groupMembers;
        //     console.log(groupMembers);
        //     // Now you can work with the groupMembers data
        //   }
        // });

        // if host then you gotta get the same password
        
      }else if(option == 'check'){
         console.log('heeey')
        const querySnapshot = await db.collection('groups').where('groupName', '==', this.tempRoomCode).get();

        if (!querySnapshot.empty) {

          
          this.roomCode = this.tempRoomCode

          querySnapshot.forEach((doc) => {
            // Access the groupMembers property
            this.groupMembers = doc.data().groupMembers;
            this.groupNumber = doc.data().groupNumber;
            this.roomStatus = doc.data().roomStatus;
            this.minimumPrice = doc.data().minimumPrice;

            this.hostName = doc.data().hostName;
            this.hostPassword = doc.data().hostPassword;



            // this.target = doc.data().hostName;

            // Now you can work with the groupMembers data
            // console.log(this.groupMembers);
          });
        }else{
          alert('Wrong input')
        }
      }

      
    },

    async getDocumentFromFirestore(collectionName, documentId) {
      try {
        // const db = firebase.firestore(); // Assuming Firebase is initialized
        const docRef = db.collection(collectionName).doc(documentId);
        const doc = await docRef.get();

        if (doc.exists) {
          console.log('Document data:', doc.data());
          return doc.data();
        } else {
          console.log('No such document!');
          return null;
        }
      } catch (error) {
        console.error('Error getting document:', error);
        throw error;
      }
    },

    async addMemberToGroupBasedOnGroupName(newMemberData) {
      try {
        // Query the groups collection to find the specific document
        const querySnapshot = await db.collection('groups').where('groupName', '==', this.roomCode).get();

        // Check if the query returned any documents
        if (!querySnapshot.empty) {
          querySnapshot.forEach(async (doc) => {
            const docRef = db.collection('groups').doc(doc.id);
            const docData = (await docRef.get()).data();

            // Add new member to the groupMembers array
            const groupMembers = docData.groupMembers || []; // Fallback to an empty array if groupMembers is undefined
            groupMembers.push(newMemberData);

            // Update the document with the modified array
            await docRef.update({ groupMembers });

            console.log(`Member added to group in document with ID: ${doc.id}`);
          });
        } else {
          console.log('No matching documents found');
        }
      } catch (error) {
        console.error('Error adding member to group:', error);
        throw error;
      }
    },

    async createRoom(){
      console.log('hey')

      this.roomCode = this.generateRandomString(6)

      const querySnapshot = await db.collection('groups').where('groupName', '==', this.roomCode).get();
      
      if (querySnapshot.empty) {
        const groupDoc = await db.collection('groups').add({
          groupName: this.roomCode,

          hostName: this.hostName,
          hostPassword: this.hostPassword,
          selectedDate: this.selectedDate,
          location: this.location,
          groupNumber: this.groupNumber,
          minimumPrice: this.minimumPrice,
          groupMembers: [],
          roomStatus: 'recruting'
          // pin: this.newPin,
          // recipient: this.recipient,
          // hostName: this.hostName,
        });
        
        this.officialGroupCode = groupDoc.id;  // This becomes your unique identifier for the group
        this.copyToClipboard(this.roomCode)
        await alert(`You just created room : ${this.roomCode}`)

        this.tempRoomCode = this.roomCode
        this.roomCode = null
        this.goBackToHome()


      } else {
        this.groupNameExists = true;
        alert('Got some error')
      }
    },

    async closeRecruting(){
      let password = this.askForInput("Host password?");
      if(parseInt(password, 10) !== this.hostPassword) return alert('wrong passweord')
      
      // alert('you passed')
      // this.updateStatus('roomStatus','alredy assigned')
      this.randomAlg()
      this.updateStatus('alredy assigned',this.groupMembers)

      this.roomStatus = 'alredy assigned'


      alert('Closed the recuriting')
    },

    askForInput(question) {
      let userInput = prompt(question);
      return userInput;
    },

    async updateStatus(roomData,newGroupData) {
      try {
        // Query the groups collection to find the specific document
        const querySnapshot = await db.collection('groups').where('groupName', '==', this.roomCode).get();

        // Check if the query returned any documents
        if (!querySnapshot.empty) {
          querySnapshot.forEach(async (doc) => {
            const docRef = db.collection('groups').doc(doc.id);

            // Update the roomStatus field
            await docRef.update({ roomStatus: roomData });
            await docRef.update({ groupMembers: newGroupData });

            // console.log(`Room status updated to '${newStatus}' in document with ID: ${doc.id}`);
          });
        } else {
          console.log('No matching documents found');
        }
      } catch (error) {
        console.error('Error updating room status:', error);
        throw error;
      }
    },

    checkYourTarget(member){
      if(this.roomStatus == 'recruting') return

      let password = this.askForInput(`If you are [${member.name}].\n Type your password to check your secret Santa`);

      if(parseInt(password, 10) !== member.password) return alert('wrong passweord')
      return alert(`Your secret Santa is [${member.target}]`)
    },

    checkDetail(member){
      alert(`Data about: ${member.name}\n\nWishlist: ${member.WishList}\n\nWarning: ${member.Warning}`)
    },

    changeGiftStatus(member,index){
      if(this.roomStatus == 'recruting') return

      let password = this.askForInput(`If you are [${member.name}].\n Type your password to change your gift status`);

      if(parseInt(password, 10) !== member.password) return alert('wrong passweord')
      // return alert(`Your secret Santa is [${member.target}]`)
      this.groupMembers[index].isGiftReady = true
      this.updateStatus('alredy assigned',this.groupMembers)

    },

    
    // --------------------





    isOneWord(input) {
      console.log(input)
      
      // Use a regular expression to check if the string contains only letters
      return /^[A-Za-z]+$/.test(input);
    },

    isSixDigitInteger(value) {
      console.log(value)
      // Use a regular expression to check for a 6-digit integer, allowing leading zeros
      return /^(0*[1-9][0-9]{0,4}|0{6})$/.test(value);
    },

    validatePassword(input) {
      console.log(input)
      if(input < 100000) return false
      if(input > 999999) return false
      
      return true
    },
    

    

    // ----------------------

    generateRandomString(length) {
      const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let result = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      return result;
    },

    copyToClipboard(value) {
      // Create a temporary textarea element
      const textarea = document.createElement('textarea');
      textarea.value = value;

      // Append the textarea to the document
      document.body.appendChild(textarea);

      // Select and copy the text from the textarea
      textarea.select();
      document.execCommand('copy');

      // Remove the textarea from the document
      document.body.removeChild(textarea);

      // You can provide some feedback to the user here if needed
      // Maybe show a message that the text has been copied.
    },

    getRoomCodeFromUrl() {
      const urlParams = new URLSearchParams(window.location.search);
      const roomCode = urlParams.get('roomCode');

      if (roomCode) {
        this.tempRoomCode = roomCode;
        console.log(this.tempRoomCode);
      }
    },
    
    getTabModeFromUrl() {
      const urlParams = new URLSearchParams(window.location.search);
      const tabMode = urlParams.get('tabMode');

      if (tabMode) {
        console.log('----')
        console.log(tabMode)
        console.log('----')

        if(tabMode == 'join') this.showingTab = 'join'

        // if(tabMode == 'check') {
        //   this.showingTab = 'check'
          // check if the roomCode actuall is real

        // }

      }
    },

    getBaseUrl() {
      const { protocol, host, pathname } = window.location;
      return `${protocol}//${host}${pathname}`;
    },

    async copyUrlToClipboard() {
      try {
        const url = this.getBaseUrl()+ '?roomCode=' + this.roomCode;
        await navigator.clipboard.writeText(url);
        alert('Share URL copied to clipboard: ');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    },



    developingTest(){
      // this.showingTab = 'join'
      // this.hostName = 'Nozo'
      // this.hostPassword = 123450
      // this.selectedDate=  20231230
      // this.location= 'Nagano'
      // this.groupNumber=5
      // this.minimumPrice=2000

      // this.tempName = 'teste'
      // this.tempPassword = 123456

      // this.tempRoomCode = 'HVxpQ3'
      // // this.checkInput('join')
      // this.showingTab = 'check'

    },


  },

  mounted(){
    console.clear()

    

    this.getRoomCodeFromUrl()
    this.getTabModeFromUrl()

    const element = document.getElementById('modal');
    if(element){
      element.style.opacity = 0

      setTimeout(() => {
        element.style.opacity = ''
        element.style.transition = "all 1.5s ease-in-out";
      }, 1000); 
    }

    // this.randomAlg()

    this.generateAvatars()

    this.developingTest()

    
  },
  watch: {
    showingTab() {
      this.roomCode = null
      // this.groupNumber = null
    }
  },
  };
</script>  

<style>
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

  html{
    height: 100vh;
    overflow: hidden;
    
  }
  /* input {
    pointer-events: none;
  } */
  input {
  font-size: 16px; /* Prevents zoom on mobile devices */
}
  body{
    margin: 0 auto;
    max-width: 500px;
    
  }
  .background {
    /* background-image: url('../public/assets/images/background.png'); */
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../public/assets/images/background.png');
    width: 100%;
    position: relative;
    background-size: 150% 100%;

    max-width: 450px;
    max-height: 900px;
    margin: auto;

    background-position: right;
  }

  .modal{
    position: absolute;
    top: 33%;
    left: 50%;
    transform: translate(-50%,-50%);

    display: block;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 10px;

    width: 80%;
    height: 15%;
    
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
    height: 75%;
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
    grid-template-columns: 20% 75%;
    justify-content: space-between;
    /* text-align: center; */
    align-items: center;
    margin-bottom: 20px;
    
    padding-bottom: 20px;
    border-bottom: 1px solid grey;
  }
  .main-content .input-table .section-row .section-row-left{
    text-align: center;
  }

  .main-content .input-table .section-row .section-row-left i{
    font-size: 2.5em;
    color: #01796f;
  }

  .main-content .input-table .section-row input{
    width: 50%;
    border: 1px solid #cccccc;
    border-radius: 4px;
    padding: 10px 15px;
  }

  .main-content .input-table .section-row input.longer-input{
    width: 85%;
  }

  .avatar-container{
    width: 95%;
    margin: auto;
    display: grid;

    grid-template-columns: 28% 28% 28%;
    justify-content: space-between;
  }

  .avatar-container div{
    margin-bottom: 15px;
  }

  .avatar-container .reload-button{
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: #01796f;

  }


  /* ------------------- */
  #checkButton{
    background-color: #01796f; /* Green */
    border: none;
    color: white;
    padding: 10px 0px;
    text-align: center;
    text-decoration: none;
    display: block;
    width: 40%;
    font-size: 16px;
    margin: 35px auto;
  }

  .confirm-table .section-row-right{
    display: flex;
    align-items: center;
    width: 90%;
    justify-content: space-between;
  }

  /* .confirm-table .section-row-right span{
    font-weight: bold;
  } */

  .confirm-table .section-row-right h4{
    /* color:#FEE9C5; */
    font-weight: bold;
    display: inline-block;
    font-size: 1.5em !important;
    line-height:  0;
    margin: 0 10px;
    float: right;
    
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
