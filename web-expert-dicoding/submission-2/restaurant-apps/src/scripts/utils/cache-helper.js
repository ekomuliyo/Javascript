import CONFIG_CACHE from '../globals/config-cache';

const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this._openCache();
    cache.addAll(requests);
  },
  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== CONFIG_CACHE.CACHE_NAME)
      .map((filterName) => caches.delete(filterName));
  },
  async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      this._fetchRequest(request);
      return response;
    }
    return this._fetchRequest(request);
  },
  async _openCache() {
    return caches.open(CONFIG_CACHE.CACHE_NAME);
  },
  async _fetchRequest(request) {
    const response = await fetch(request, {
      header: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    
    if (!response || response.status !== 200) {
      return response;
    }

    await this._addCache(request);
    return response;
  },
  async _addCache(request) {
    const cache = await this._openCache();
    cache.add(request);
  },
};

export default CacheHelper;
