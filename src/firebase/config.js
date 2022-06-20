import { collection, getDocs, addDoc, arrayUnion } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import * as fs from "fs";

const firebaseConfig = {
  apiKey: "AIzaSyD8PP2i3T5TNW25vvt71HADVrwh6mRZhWc",
  authDomain: "rentall-3e4d1.firebaseapp.com",
  projectId: "rentall-3e4d1",
  storageBucket: "rentall-3e4d1.appspot.com",
  messagingSenderId: "959648292929",
  appId: "1:959648292929:web:8db44fd4bf5af026ab66c0",
  measurementId: "G-HKGJ8LGJJS",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const getCategoryData = async (categoryName) => {
  console.log(categoryName);
  const querySnapshot = await getDocs(
    collection(db, `/category/${categoryName}/products`)
  );

  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const addCategoryData = async (data, image) => {
  console.log(data);
  const specifications = data.specifics.split(",");
  const docRef = await addDoc(
    collection(db, `/category/${data.categoryName.toLowerCase()}/products`),
    {
      name: data.name,
      brand_name: data.brand_name,
      delivery: data.delivery,
      product_age: data.product_age,
      quality: data.quality,
      rental_time: data.rental_time,
      rented: data.rented,
      specifics: specifications,
      type: data.type,
      product_image: [data.product_image],
    }
  );
  console.log("Document written with ID: ", docRef.id);
};
