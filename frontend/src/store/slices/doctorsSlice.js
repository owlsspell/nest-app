import { createSlice } from '@reduxjs/toolkit'
import docktors from '../../../mock_data/doctors.json'

const doctorsSlice = createSlice({
    name: 'doctors',
    initialState: docktors,
    reducers: {
        updateDoctorsList: (state, action) => {
            state.doctors = action.payload
        },
    }
})

export const { incremented, decremented } = doctorsSlice.actions
export default doctorsSlice.reducer


