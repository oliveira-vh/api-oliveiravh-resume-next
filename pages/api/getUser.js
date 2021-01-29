import getUser from '../../utils/getUser'

const apiGetUser = async(req, res) => {
    const data = await getUser('oliveira-vh')
    res.send(data)
}

export default apiGetUser