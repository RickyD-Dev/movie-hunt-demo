import { redirect } from "@sveltejs/kit";


export const actions = {
    search: async ({ request, cookies }) => {
        const data = await request.formData();
        const userQuery = data.get('search');
        cookies.set("search-query", userQuery);

        throw redirect(302, `/es/buscar=/${userQuery}&p%C3%A1gina=1`);
    }
}
