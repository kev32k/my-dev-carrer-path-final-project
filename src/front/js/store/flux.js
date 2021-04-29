const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			global_url: process.env.BACKEND_URL,
			bearer_token: "",
			login: false,
			careerpaths: [],
			name: "",
			current_career_path_id: 1, //TODO eliminar esta variable
			all_skills: [],
			front_end_skills: [],
			back_end_skills: [],
			mobile_skills: [],
			course_api: []
		},

		actions: {
			async fetchCareerPaths() {
				const store = getStore();
				await fetch(process.env.BACKEND_URL + "/api/careerpath/all")
					.then(response => response.json())
					.then(result => {
						console.log("api");
						console.log(result);
						setStore({ careerpaths: result });
						console.log("list");
						console.log(store.careerpaths[0].img);
					})
					.catch(error => console.log("error", error));
			},

			// udemy_api: async (title, url) => {
			// 	const requestOptions = {
			// 		method: "POST",
			// 		headers: {
			// 			Accept: "application/json, text/plain, */*",
			// 			Authorization:
			// 				"Basic YzhuVVQ5bHdxNHNjNWF5M09yVkl1eXF6R010MDFFVzJZenpMbXV1TDo5S0pzODFPdkFrV2NHbHhoV3lmbWFGMzZJcEo0ZE15QldJRTJiMDBEV216SmpqSjcza0l2bGZsZFZBNVRIbENOQ1B5ZURQc1VNMjIzZE51Njh2bE9QemgwVVM4eDMyVVlsdlJkM1dXTThMOWNsNXJxZVZoNlRsc1BCMXJ4V09FYw==",
			// 			"Content-Type": "application/json;charset=utf-8"
			// 		}
			// 	};
			// 	fetch("https://www.udemy.com/api-2.0/courses/959700/")
			// 		.then(response => response.json())
			// 		.then(data => console.log(data));

			// 	setStore({ course_api: result });
			// },

			// register_user: async (name, email, password) => {
			// 	const requestOptions = {
			// 		method: "POST",
			// 		headers: { "Content-Type": "application/json" },
			// 		body: JSON.stringify({ name: name, email: email, password: password })
			// 	};
			// 	fetch(global_url + "api/register", requestOptions)
			// 		.then(response => response.json())
			// 		.then(data => console.log(data));
			// },

			// login_user: async (email, password) => {
			// 	const store = getStore();
			// 	const requestOptions = {
			// 		method: "POST",
			// 		headers: { "Content-Type": "application/json" },
			// 		body: JSON.stringify({ email: email, password: password })
			// 	};

			// 	await fetch(global_url + "api/login", requestOptions)
			// 		.then(response => response.json())
			// 		.then(data => setStore({ bearer_token: data }));
			// 	console.log(store.bearer_token);

			// 	if (store.bearer_token.length > 0) {
			// 		setStore({ login: true });
			// 		console.log(store.login);
			// 	}
			// },

			save_username: name => {
				setStore({ name: name });
			},
			save_token: token => {
				const store = getStore();
				setStore({ bearer_token: token });
				console.log(store.bearer_token);
			},
			show_login: () => {
				const store = getStore();
				setStore({ login: true });
				console.log(store.login);
			},
			save_userid: id => {
				setStore({ id: id });
			},
			current_career_id: id => {
				//1 2 3 fe be mobile
				setStore({ current_career_path_id: id });
			},
			// get_all_skills: async () => {
			// 	const store = getStore();
			// 	const requestOptions = {
			// 		method: "GET",
			// 		headers: { "Content-Type": "application/json" }
			// 	};

			// 	const result = await fetch(store.global_url + "api/skill/all", requestOptions)
			// 		.then(response => response.json())
			// 		.then(data => {
			// 			console.log("mi madre el bicho");
			// 			setStore({ all_skills: data });
			// 			console.log(store.all_skills);
			// 		});
			// },
			async fetchSkills() {
				const store = getStore();
				await fetch(process.env.BACKEND_URL + "/api/skill/all")
					.then(response => response.json())
					.then(result => {
						console.log("apiskills");
						console.log(result);
						setStore({ all_skills: result });
						console.log("listskills");
						console.log(store.all_skills);
					})
					.catch(error => console.log("error", error));
			},
			sort_skills: () => {
				const store = getStore();
				let temp_front_end_skills = [];
				let temp_back_end_skills = [];
				let temp_mobile_skills = [];
				if (store.all_skills) {
					store.all_skills.map((item, index) => {
						if (index >= 0 && index < 7) {
							temp_front_end_skills.push(item);
						}
						if (index >= 7 && index < 15) {
							temp_back_end_skills.push(item);
						}
						if (index >= 15 && index <= 17) {
							temp_mobile_skills.push(item);
						}
					});
					setStore({ front_end_skills: temp_front_end_skills });
					setStore({ back_end_skills: temp_back_end_skills });
					setStore({ mobile_skills: temp_mobile_skills });
					console.log(store.front_end_skills);
					console.log(store.back_end_skills);
					console.log(store.mobile_skills);
				}
			},
			add_career_link: async (course_name, course_url, skill_id) => {
				const store = getStore();
				// const requestOptions = {
				//     method: "POST",
				//     headers: {
				//         "Content-Type": "application/json",
				//         Authorization: "Bearer " + store.bearer_token
				//     },
				//     body: JSON.stringify({ course_url: course_url, course_name: course_name, skill_id: skill_id })
				// };

				// const result = await fetch(store.global_url + "api/publish-careerlinks", requestOptions)
				//     .then(response => response.json())
				//     .then(data => {
				//         console.log(data);
				//     });

				// var myHeaders = new Headers();
				// myHeaders.append("Authorization", "Bearer " + store.bearer_token);
				// myHeaders.append("Content-Type", "application/json");

				// var raw = JSON.stringify({
				// 	course_name: course_name,
				// 	course_url: course_url,
				// 	skill_id: skill_id
				// });

				// var requestOptions = {
				// 	method: "POST",
				// 	headers: myHeaders,
				// 	body: raw,
				// 	redirect: "follow"
				// };

				// fetch(store.global_url + "api/publish-careerlinks", requestOptions)
				// 	.then(response => response.text())
				// 	.then(result => console.log(result))
				// 	.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;
