import {
  HTTPMethods,
  type CheatSheetGetFilters,
  type SavedCheatSheetResponseType,
  type UnsavedCheatSheetType,
  type UpdateCheatSheetType
} from '../types';
import { PUBLIC_APP_SERVER } from '$env/static/public';

const _filter_serializer = (filters: CheatSheetGetFilters): URLSearchParams => {
  let serialized: Record<string, string> = {};

  if (filters.is_published__list) {
    serialized = {
      ...serialized,
      is_published__list: filters.is_published__list.join(',')
    };
  }

  return new URLSearchParams(serialized);
};

const fetchClientPostWithoutToken = async (url: string, data: object): Promise<any> => {
  const response = await fetch(`${PUBLIC_APP_SERVER}/api${url}`, {
    method: HTTPMethods.POST,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(async (data) => {
    if (data.status !== 200) {
      throw new Error(data.statusText);
    }
    const responseStatus = data.status;
    const responseData = await data.json();

    return {
      status: responseStatus,
      data: responseData
    };
  });

  return response;
};

const fetchClientGetWithoutToken = async (url: string): Promise<any> => {
  const response = await fetch(`${PUBLIC_APP_SERVER}/api${url}`, {
    method: HTTPMethods.GET,
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(async (data) => {
    if (data.status !== 200) {
      throw new Error(data.statusText);
    }
    const responseStatus = data.status;
    const responseData = await data.json();

    return {
      status: responseStatus,
      data: responseData
    };
  });

  return response;
};

const fetchClientGet = async (
  url: string,
  token: string,
  filters?: CheatSheetGetFilters
): Promise<any> => {
  const raw_filters = filters ? _filter_serializer(filters) : '';
  const response = await fetch(`${PUBLIC_APP_SERVER}/api${url}?${raw_filters}`, {
    method: HTTPMethods.GET,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }).then(async (data) => {
    if (data.status !== 200) {
      throw new Error(data.statusText);
    }
    const responseStatus = data.status;
    const responseData = await data.json();

    return {
      status: responseStatus,
      data: responseData
    };
  });

  return response;
};

const fetchClientPost = async (
  url: string,
  token: string,
  payload: UnsavedCheatSheetType
): Promise<{ status: number; id: string }> => {
  const response = await fetch(`${PUBLIC_APP_SERVER}/api${url}`, {
    method: HTTPMethods.POST,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then(async (data) => {
    if (data.status !== 200) {
      throw new Error(data.statusText);
    }
    const responseStatus = data.status;
    const responseData = (await data.json()) as SavedCheatSheetResponseType;

    return {
      status: responseStatus,
      id: responseData.id
    };
  });

  return response;
};

const fetchClientPatch = async (
  url: string,
  token: string,
  payload: UpdateCheatSheetType
): Promise<any> => {
  const response = await fetch(`${PUBLIC_APP_SERVER}/api${url}`, {
    method: HTTPMethods.PATCH,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then(async (data) => {
    if (data.status !== 200) {
      throw new Error(data.statusText);
    }
    const responseStatus = data.status;

    return {
      status: responseStatus
    };
  });

  return response;
};

const fetchClientDelete = async (url: string, token: string): Promise<any> => {
  const response = await fetch(`${PUBLIC_APP_SERVER}/api${url}`, {
    method: HTTPMethods.DELETE,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }).then(async (data) => {
    if (data.status !== 200) {
      throw new Error(data.statusText);
    }
    const responseStatus = data.status;

    return {
      status: responseStatus
    };
  });

  return response;
};

export {
  fetchClientPostWithoutToken,
  fetchClientGetWithoutToken,
  fetchClientGet,
  fetchClientPost,
  fetchClientPatch,
  fetchClientDelete
};
