const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			bearer_token: "",
			login: false
		},

		actions: {
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
			}
		}
	};
};

export default getState;
