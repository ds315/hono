
import { useQuery } from "@tanstack/react-query";
import { rpc } from "./main.tsx";

// @deno-types="./types.d.ts"
import css from './app.module.css';

export default function App()
{
	const user = useQuery({
		queryKey: ['user'],
		queryFn: async () => {
			const res = await rpc.users[':id'].$get({param: {id: '1'}});
			return await res.json();
		}
	});

	return <>
		<div>id: {user.data?.id}</div>
		<div className={css.name}>Name: {user.data?.name}</div>
		<div className={css.age}>Age: {user.data?.age}</div>
	</>
}
