class AdBreak {

    insertAdBreak(request) {
        request.media.breakClips = [{
            id: 'AdClip',
            title: 'Test Ad',
            posterUrl: posterUrl,
            contentId: 'video-640x360.mp4',
            contentType: 'video/mp4',
            duration: 13,
            whenSkippable: 2
        }];

        request.media.breaks = [
            {
                id: 'AdBreak1',
                breakClipIds: ['AdClip'],
                position: 0,
                isEmbedded: false
            },
            // {
            //     id: 'AdBreak2',
            //     breakClipIds: ['AdClip', 'AdClip'],
            //     position: 60,
            //     isEmbedded: false
            // }
        ];
    }

}
