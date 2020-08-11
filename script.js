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
    const friend = document.createElement('div');
    friend.classList.add('friend');

    friend.innerHTML = `
    <div class="inner-friend">
    <p>
    ${data.name}${data.date}${data.item}
    </p>
    </div>
    `;

    //add friends to dom
    friendsEl.push(friend);

    friendsContainer.appendChild(friend);
}

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
        c
    }
});
