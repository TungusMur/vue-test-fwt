/* eslint-disable no-shadow */
/* eslint-disable max-len */
import api from './api';

type IFetchPaintings = (
  page: number,
  locationId?: string,
  authorId?: string,
  name?: string,
  fromDate?: string,
  beforeDate?: string,
) => void;
const fetchPaintings: IFetchPaintings = (page, locationId, authorId, name, fromDate, beforeDate) => api
  .get(`/paintings?_expand=location&_expand=author&_page=${page}&_limit=12${locationId ? `&locationId=${locationId}` : ''
  }${authorId ? `&authorId=${authorId}` : ''
  }${name ? `&q=${name}` : ''
  }${fromDate && beforeDate ? `&created_gte=${fromDate}&created_lte=${beforeDate}` : ''}`)
  .then((responce) => ({
    data: responce.data.map(({
      author,
      created,
      id,
      imageUrl,
      location,
      name,
    }: {
      author: { name: string },
      created: string,
      id: number,
      imageUrl: string,
      location: { location: string },
      name: string,
    }) => ({
      author: author.name,
      created,
      id,
      imageUrl,
      location: location.location,
      name,
    })),
    count: responce.headers['x-total-count'],
  }));

export default fetchPaintings;
