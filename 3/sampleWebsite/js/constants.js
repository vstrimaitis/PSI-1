const USER_ID_STORAGE_KEY = 'user_id';
const USER1 = {
	Id: '20fe95c4-15e4-4927-b4b3-6025ae30be8a',
	Email: 'user1@email.com',
	Password: 'Password1',
	FirstName: 'User',
	LastName: 'One',
	IsAdmin: true
};
const USER2 = {
	Id: '8918865e-320d-48e2-8c54-5167c570c111',
	Email: 'user2@email.com',
	Password: 'Password2',
	FirstName: 'User',
	LastName: 'Two',
	IsAdmin: false
};

const EVENTS = [
	{
		Sport: "tennis",
		Name: "Lietuvos Atvirasis Teniso Čempionatas",
		Description: "Pirmasis Lietuvoje visos šalies masto teniso čempionatas, pritraukęs visą teniso elitą. Text Text Text Text Text Text",
		Videos: [
			{
				Name: "20 geriausių akimirkų",
				Link: "https://www.youtube.com/embed/Ac-CcyJ8rVs"
			},
			{
				Name: "Interviu su R. Berankiu",
				Link: "https://www.youtube.com/embed/Meg_ctwgwHc"
			}
		]
	},
	{
		Sport: "dota2",
		Name: "Lietuvos Atvirasis Dota 2 Čempionatas",
		Description: "Pirmasis Lietuvoje Dota 2 čempionatas. Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text  Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
		Videos: [
			{
				Name: "Finalo transliacija",
				Link: "https://www.youtube.com/embed/w-StZjrXryU"
			}
		]
	}
];

const JOB_LISTINGS = [
	{
		Position: "Kompiuterių specialistas",
		Sport: "Dota 2",
		FreeSpots: 1,
		Salary: 300,
		StartDate: "2016-12-20",
		EndDate: "2016-12-29"
	},
	{
		Position: "Teisėjas",
		Sport: "Tenisas",
		FreeSpots: 1,
		Salary: 100,
		StartDate: "2017-02-10",
		EndDate: "2017-02-11"
	},
	{
		Position: "Linijos teisėjas",
		Sport: "Tenisas",
		FreeSpots: 8,
		Salary: 50,
		StartDate: "2017-02-10",
		EndDate: "2017-02-11"
	}
];