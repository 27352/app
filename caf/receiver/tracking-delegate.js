class TrackingDelegate {

    offset = 0;

    start() {
        new vtg.caf.CafConnector(this);
    }

    getResourceInfo(castEvent) {
        this.offset++;

        return {
            category: 'the-genre',
            cdn: 'Fastly',
            drmEnabled: true,
            duration: 596,
            episode: 3,
            hasSessionResumed: false,
            isAffiliateFeed: false,
            isDcrLive: false,
            isEpisode: false,
            isEpisode: false,
            isFullscreen: false,
            isMobile: false,
            isPaidContent: false,
            isPlaylist: false,
            mediaId: '4836fb66f6e081bcf6fea7df4531f22ac7ff',
            mediaUrl: '<the-asset-url>',
            playerId: 'player.id',
            playerName: 'shaka-player',
            playerVersion: '0.0.0',
            playhead: 0,
            screenSize: '640x360',
            season: 1,
            seriesTitle: 'the-series-title',
            streamType: 'VOD',
            systemDevice: 'CAF',
            userCountry: 'us',
            videoTitle: 'the-video-title-' + this.offset.toString(),
            visitorId: '134587672435987'
        };
    }

    getAdBreakInfo(castEvent) {
        return {
            adBreakType: 'preroll',
            adBreakPosition: 1,
            adBreakDuration: 13,
            playhead: 0
        };
    }

    getAdInfo(castEvent) {
        return {
            adId: 'pre',
            adTitle: '<the-ad-title>',
            adUrl: '<the-ad-url>',
            adPosition: 1,
            adDuration: 13,
            playhead: 0
        };
    }

    getPlayerInfo(castEvent) {
        return {
            isFullscreen: false,
            volume: 5,
            muted: false
        };
    }

    onNotify(castEvent) {
        // console.log('[delegate] onNotify', castEvent.type);
    }

}
