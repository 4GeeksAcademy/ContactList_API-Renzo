const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacto: [],
			nuevoContacto: 
				{
					name: "",
					phone: "",
					email: "",
					address: ""
				}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			fetchAgenda: async () => {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/jaimito")
					const data = await response.json()
					setStore({ contacto : data.contacts })
			},

			saveContacts: async() => {
					const store = getStore();

					const myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");
			
					const raw = JSON.stringify({
						"name": store.nuevoContacto.name,
						"phone": store.nuevoContacto.phone,
						"email": store.nuevoContacto.email,
						"address": store.nuevoContacto.address
					});
			
					const requestOptions = {
						method: "POST",
						headers: myHeaders,
						body: raw
					};

					const response = await fetch("https://playground.4geeks.com/contact/agendas/jaimito/contacts",requestOptions);
					const data = await response.json()
					//await store.fetchAgenda()
					
			}

		}
	};
};

export default getState;
