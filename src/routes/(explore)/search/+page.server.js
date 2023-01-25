import { redirect } from "@sveltejs/kit";


export const actions = {
    search: async ({ request, cookies }) => {
        const data = await request.formData();
        console.log('data', data);
        const userQuery = data.get('search');
        cookies.set("search-query", userQuery);

        console.log("THE USER'S QUERY: " + userQuery);



        throw redirect(302, `/search/${userQuery}&page=1`);
    }
}
