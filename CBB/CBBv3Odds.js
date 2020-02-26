﻿"use strict";

const BaseClient = require('../baseClient');

class CBBv3OddsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get In-Game Odds by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-11-20</code>, <code>2018-11-23</code>.</param>
    getInGameOddsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cbb/odds/{format}/LiveGameOddsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get In-Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of an CBB game. GameIDs can be found in the Games API. Valid entries are <code>17775</code> or <code>17776</code></param>
    getInGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/cbb/odds/{format}/LiveGameOddsLineMovement/{gameid}', parameters);
    }

    /// <summary>
    /// Get Pre-Game Odds by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-11-20</code>, <code>2018-11-23</code>.</param>
    getPreGameOddsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cbb/odds/{format}/GameOddsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Pre-Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of an CBB game. GameIDs can be found in the Games API. Valid entries are <code>17775</code> or <code>17776</code></param>
    getPreGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/cbb/odds/{format}/GameOddsLineMovement/{gameid}', parameters);
    }

    /// <summary>
    /// Get Alternate Market Pre-Game Odds by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-11-20</code>, <code>2018-11-23</code>.</param>
    getAlternateMarketPreGameOddsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cbb/odds/{format}/AlternateMarketGameOddsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Alternate Market Pre-Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of an CBB game. GameIDs can be found in the Games API. Valid entries are <code>17775</code> or <code>17776</code></param>
    getAlternateMarketPreGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/cbb/odds/{format}/AlternateMarketGameOddsLineMovement/{gameid}', parameters);
    }

}

module.exports = CBBv3OddsClient;

