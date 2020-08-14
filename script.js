const openModalButton = document.querySelectorAll('[data-modal-target]');
const closeModalButton = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const nameEl = document.getElementById('name');
const dateEl = document.getElementById('date');
const itemEl = document.getElementById('item');
const addFriendBtn = document.getElementById('add-friend');
const friendsContainer = document.getElementById('friends-container');



openModalButton.forEach(button => {
button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)


});
});

overlay.addEventListener('click',() => {
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
            closeModal(modal)
        })
        
    
    
    });
    

closeModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    
    
    });
    });

function openModal(modal) {
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if(modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

//store dom friends

const friendsEl = [];

//store friend data 

const FriendsData = getFriendsData();

//create all friends
function createFriends() {
    FriendsData.forEach((data, index) => createFriend(data, index));
}

//create a single friend in the dom

  function createFriend(data) {
    // append HTML to DOM
    const friend = document.createElement('ul');
    friend.classList.add('friend');
    
    friend.innerHTML = `
    <div id="inner-friend" class="inner-friend">
    <ul>
      <li>${data.name}</li>
      <li>${data.date}</li>
      <li>${data.item}</li>
      </ul>
    </div>`;

    //add friends to dom
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    
    friendsEl.push(friend);
  friend.appendChild(deleteBtn);
    friendsContainer.appendChild(friend);
    
   
  }

  // When a element inside of the todoList is clicked...
friendsContainer.addEventListener("click", function(event) {
    const element = event.target;
  
    // If that element is a button...
    if (element.matches("button") === true) {
      // Get its data-index value and remove the todo element from the list
     element.parentNode.remove(element);
     
        
    
     
     
    }
});
   

    
  
    
    
    // bindEvents();
    //  const deleteBtn = document.getElementById("delete");
    //  console.log("here");
    //  if (deleteBtn) {
    //    deleteBtn.addEventListener("click", false);
    //    const elem = document.getElementById("inner-friend");
       
    //    elem.parentNode.removeChild(elem);

    //    return false;
    //  }
//     deleteBtn.addEventListener('click', () => {
    
    
//   });
    



// get friends from localstorage
function getFriendsData() {
    const friends = JSON.parse(localStorage.getItem('friends'));
    
    return friends === null ? [] : friends;
    
}

// add friends to local storage
function setFriendsData(friends) {
    localStorage.setItem('friends', JSON.stringify(friends));
    window.location.reload();
}



createFriends();

//remove friend from local storage


// add new friend
addFriendBtn.addEventListener('click', () => {
   
    const name = nameEl.value;
    const date = dateEl.value;
    const item = itemEl.value;

    if(name.trim() && date.trim() && item.trim()) {
        const newFriend = {name, date, item };

        createFriend(newFriend);

        nameEl.value = '';
        dateEl.value = '';
        itemEl.value = '';

        FriendsData.push(newFriend);
        setFriendsData(FriendsData);
        
    }
});

// deleteBtn.addEventListener('click', () => {
//     const elem = document.getElementById('inner-friend');
//     console.log('here');
//     elem.parentNode.removeChild(elem);
    
//     return false;
// }
// );

    
