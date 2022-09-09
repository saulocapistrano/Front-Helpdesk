import { API_CONFIG } from '../config/api.config';
import { Tecnico } from '../models/tecnico';

 {
    return this.http.get<Tecnico[]>(`${API_CONFIG.baseUrl}/tecnico`);
  }
}
