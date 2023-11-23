// import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

// import { db } from '../firebase'
// import { ref, child, get } from 'firebase/database'

// // const courseRef = ref(db)
// // get(child(courseRef, `courses/`))
// // .then((snapshot) => {
// //   if (snapshot.exists()) {
// // 	 console.log(snapshot.val())
// //   } else {
// // 	 console.log('No data available')
// //   }
// // })
// // .catch((error) => {
// //   console.error(error)
// // })

// export const coursesApi = createApi({
//   reducerPath: 'coursesApi',
//   baseQuery: fakeBaseQuery(),
//   tagTypes: ['Courses'],
//   endpoints: (builder) => ({
//     getCourses: builder.query({
//       async queryFn() {
//         const courseRef = ref(db)
//         get(child(courseRef, `courses/`))
//           .then((snapshot) => {
//             if (snapshot.exists()) {
//               console.log(snapshot.val())
//             } else {
//               console.log('No data available')
//             }
//             return {data: Object.values(snapshot.val())}
//           })
//           .catch((error) => {
//             console.error(error)
//           })
//         // try {
//         //   const courseRef = ref(db)
//         //   const snapshot = get(child(courseRef, `courses/`))
//         //   const result = Object.values(snapshot.val())
//         //   console.log('result', result);
//         //   return {data: result}
//         // }
//         // catch (error) {
//         //   console.log(error);
//         // }
//       },
//       providesTags: (result) =>
//         result
//           ? [
//               ...result.map(({ id }) => ({ type: 'Courses', id })),
//               { type: 'Courses', id: 'LIST' },
//             ]
//           : [{ type: 'Courses', id: 'LIST' }],
//     }),
//   }),
// })

// export const { useGetCoursesQuery, useLazyGetCoursesQuery } = coursesApi
