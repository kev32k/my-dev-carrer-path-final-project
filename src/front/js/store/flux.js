const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			bearer_token: "",
			login: false,
			careerpaths: [],
			name: ""
		},

		actions: {
			// fetch("https://assets.breatheco.de/apis/fake/todos/user/jorgebeto")
			// .then(response => response.json())
			//     .then(result => setlist(result))
			//     .catch(error => console.log("error", error));

			// .then(result => {
			//         console.log(result);
			//         setStore(result);
			//     })

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

			register_user: async (name, email, password) => {
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ name: name, email: email, password: password })
				};
				fetch(global_url + "api/register", requestOptions)
					.then(response => response.json())
					.then(data => console.log(data));
			},

			login_user: async (email, password) => {
				const store = getStore();
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password })
				};

				await fetch(global_url + "api/login", requestOptions)
					.then(response => response.json())
					.then(data => setStore({ bearer_token: data }));
				console.log(store.bearer_token);

				if (store.bearer_token.length > 0) {
					setStore({ login: true });
				}
			},

			save_username: name => {
				setStore({ name: name });
			}
		}
	};
};

export default getState;
