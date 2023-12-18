import { redirect } from "@sveltejs/kit";


export const actions = {
    search: async ({ request }) => {
        const data = await request.formData();
        const userQuery = data.get('search');

        throw redirect(302, `/search=/${userQuery}&page=1`);
    }
}
