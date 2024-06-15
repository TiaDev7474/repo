import {httpClient} from "@/lib/axios";
import {IData, IExampleDto} from "@/app/steps/step4/_services/definition";
import {EXAMPLE_ENDPOINTS} from "@/app/feat-exemple/_services/endpoint";
import {PROVIDERS_ENDPOINTS} from "@/app/steps/step4/_services/endpoint";


class ProvidersService{
    public createIdentity(create: IData){
        return httpClient.post(PROVIDERS_ENDPOINTS.CREATE,create)
    }
    public getExampleByExampleId(exampleId: string){
        return httpClient.get(EXAMPLE_ENDPOINTS.GET.replace("id",exampleId))
    }

    public getAllExample(){
        return httpClient.get(EXAMPLE_ENDPOINTS.GET_ALL)
    }
    public updateExample(exampleToUpdate: IExampleDto,id:string){
        return httpClient.put(EXAMPLE_ENDPOINTS.UPDATE.replace("id",id),exampleToUpdate)
    }
    public deleteExampleByExampleId(exampleId: string){
        return httpClient.get(EXAMPLE_ENDPOINTS.DELETE.replace("id",exampleId))
    }
}
export const providersService = new ProvidersService()