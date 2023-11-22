import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

import { db } from '../firebase'
import { ref, child, get } from 'firebase/database'

// const courseRef = ref(db)
// get(child(courseRef, `courses/`))
// .then((snapshot) => {
//   if (snapshot.exists()) {
// 	 console.log(snapshot.val())
//   } else {
// 	 console.log('No data available')
//   }
// })
// .catch((error) => {
//   console.error(error)
// })

export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Courses'],
  endpoints: (builder) => ({
    getCourses: builder.query({
      async queryFn() {
        try {
          const courseRef = ref(db)
          const course = await get(child(courseRef, `courses/`))
          const result = await course.val()
          return {data: Object.values(result)}
        }
        catch (error) {
          console.log(error);
        }
      },
      providesTags: ['Courses '],
    }),
  }),
})

export const {useGetCoursesQuery} = coursesApi
