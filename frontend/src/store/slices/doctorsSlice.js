import { createSlice } from '@reduxjs/toolkit'
import doctors from '../../../mock_data/doctors.json'

const doctorsSlice = createSlice({
    name: 'doctors',
    initialState: { doctorsList: doctors },
    reducers: {
        updateDoctorsList: (state, action) => {
            state.doctorsList = action.payload
        },
    }
})

export const { updateDoctorsList } = doctorsSlice.actions
export default doctorsSlice.reducer


