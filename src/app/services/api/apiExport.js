import { api } from "./api";

class apiExport {
    async getRecados (url) {
        try {
            const response = await api.get(url);

            if (response.data.success === true) {
                console.log("----", response.data, "resposta recados");
                return response.data;
            }

            return 'Erro';
        } catch (error) {
            return error.response;
        }
    }

   async postRecados (url, data) {
        try {
            const response = await axios.post(url, data);

            if (response.data.success === true) {
                return response.data;
            }
            return 'Erro';
        } catch (error) {
            return { data: error.response.data, status: error.response.status };
        }
    }

   async putRecados (url, data) {
        try {
            const response = await axios.put(url, data);

            if (response.data.success === true) {
                return response.data;
            }
            return 'Erro';
        } catch (error) {
            return { data: error.response.data, status: error.response.status };
        }
    }

   async deleteReacados (url) {
       try {
           const response = await axios.delete(url);

           if (response.data.success === true) {
               return response.data;
           }
           return 'Erro';	
       } catch (error) {
           return error.response;
       }
   }

}

export default new apiExport();