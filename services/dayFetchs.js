import { url } from "./jsonServer";

export const getMyDays = async (token) => {
	try {
	  let response = await fetch(url + '/days', {
		 method: 'GET',
		 headers: {
			'Access-Control-Allow-Origin': '*',
			Authorization: 'Bearer ' + token,
		 },
	  });
	  let json = await response.json();
	  return json;
	} catch (error) {
	  console.log(error);
	  return null;
	}
 };

 export const getDayByDate = async (token, fecha) => {
	try {
	  let response = await fetch(url + '/days/date/'+fecha, {
		 method: 'GET',
		 headers: {
			'Access-Control-Allow-Origin': '*',
			Authorization: 'Bearer ' + token,
		 }
	  });
	  let json = await response.json();
	  return json;
	} catch (error) {
	  console.log(error);
	  return null;
	}
 };

 export const postDay = async (token, day) => {
	try {
	  let response = await fetch(url + '/days', {
		 method: 'POST',
		 headers: {
			'Access-Control-Allow-Origin': '*',
			Authorization: 'Bearer ' + token,
		 },
		 body: JSON.stringify(day)
	  });
	  let json = await response.json();
	  return json;
	} catch (error) {
	  console.log(error);
	  return null;
	}
 };

 export const updateDayBreakFast = async (token, fecha, breakFast) => {
	try {
	  let response = await fetch(url + '/days/updateBreakFast', {
		 method: 'POST',
		 headers: {
			'Access-Control-Allow-Origin': '*',
			Authorization: 'Bearer ' + token,
		 },
		 body: JSON.stringify({
			date: fecha,
			breakFast
		 }),
	  });
	  let json = await response.json();
	  return json;
	} catch (error) {
	  console.log(error);
	  return null;
	}
 };

 export const updateDayLunch = async (token, fecha, lunch) => {
	try {
	  let response = await fetch(url + '/days/updateLunch', {
		 method: 'POST',
		 headers: {
			'Access-Control-Allow-Origin': '*',
			Authorization: 'Bearer ' + token,
		 },
		 body: JSON.stringify({
			date: fecha,
			lunch
		 }),
	  });
	  let json = await response.json();
	  return json;
	} catch (error) {
	  console.log(error);
	  return null;
	}
 };

 export const updateDayDinner = async (token, fecha, dinner) => {
	try {
	  let response = await fetch(url + '/days/updateDinner', {
		 method: 'POST',
		 headers: {
			'Access-Control-Allow-Origin': '*',
			Authorization: 'Bearer ' + token,
		 },
		 body: JSON.stringify({
			date: fecha,
			dinner
		 }),
	  });
	  let json = await response.json();
	  return json;
	} catch (error) {
	  console.log(error);
	  return null;
	}
 };

 export const updateDaySnacks = async (token, fecha, snacks) => {
	try {
	  let response = await fetch(url + '/days/updateSnacks', {
		 method: 'POST',
		 headers: {
			'Access-Control-Allow-Origin': '*',
			Authorization: 'Bearer ' + token,
		 },
		 body: JSON.stringify({
			date: fecha,
			snacks
		 }),
	  });
	  let json = await response.json();
	  return json;
	} catch (error) {
	  console.log(error);
	  return null;
	}
 };