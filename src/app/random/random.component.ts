import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrl: './random.component.scss'
})
export class RandomComponent {
apiService = inject(ApiService);
}
