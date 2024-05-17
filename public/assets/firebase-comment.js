import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
	apiKey: "AIzaSyBej9lF7GVt0_XTC_04YhbX2nTpzYTFbkA",
	authDomain: "bookstore-group1.firebaseapp.com",
	databaseURL: "https://bookstore-group1-default-rtdb.firebaseio.com",
	projectId: "bookstore-group1",
	storageBucket: "bookstore-group1.appspot.com",
	messagingSenderId: "120255369519",
	appId: "1:120255369519:web:0640d6ae60ee20f40291da",
	measurementId: "G-K7T1XKHQ7F"
};

const firebaseApp = initializeApp(firebaseConfig);
var m = 0;
try {
	const db = getDatabase();
	const usersRef = ref(db, 'Customers commented');
	const snapshot = await get(usersRef);

	if (snapshot.exists()) {
		
		const userCount = Object.keys(snapshot.val()).length;
		m=userCount;
		console.log(`Số bình luận: ${userCount}`);
	} else {
		console.log('Không có DL trong CSDL.');

	}
} catch (error) {
	console.error('Lỗi khi đếm số bình luận:', error);
	throw error;
}

function writeUserData(ten, email, tinnnhan, sothutu) {
	const db = getDatabase();
	set(ref(db, 'Customers commented/' + sothutu), {
		name: ten,
		mess: tinnnhan,
		email: email,
	});
}

document.querySelector('#submit2').addEventListener('click', () => {
	const email = document.getElementById("input_email").value;
	const name = document.getElementById("input_name").value;
	const tinnnhan = document.getElementById("input_message").value;
	
	const sluong = m;

	writeUserData(name,email,tinnnhan, sluong + 1)
	alert("Bình luận của bạn đã được đăng tải");
})