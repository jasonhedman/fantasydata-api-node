﻿"use strict";

const BaseClient = require('../baseClient');

class Csgov3StatsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Areas (Countries)
    /// </summary>
    getAreasCountriesPromise(){
        return this.GetPromise('/v3/csgo/stats/{format}/Areas');
    }

    /// <summary>
    /// Get Box Score
    /// </summary>
    /// <param name="gameid">Unique GameId for the desired box scores. Examples: <code>100000091</code></param>
    getBoxScorePromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/csgo/stats/{format}/BoxScore/{gameid}', parameters);
    }

    /// <summary>
    /// Get Box Scores by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-01-13</code>, <code>2018-06-13</code>.</param>
    getBoxScoresByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/csgo/stats/{format}/BoxScores/{date}', parameters);
    }

    /// <summary>
    /// Get Competition Fixtures (League Details)
    /// </summary>
    /// <param name="competitionid">A CS:GO competition/league unique CompetitionId. Possible values include: <code>100000009</code>, etc.</param>
    getCompetitionFixturesLeagueDetailsPromise(competitionid){
        var parameters = {};
        parameters['competitionid']=competitionid;
        return this.GetPromise('/v3/csgo/stats/{format}/CompetitionDetails/{competitionid}', parameters);
    }

    /// <summary>
    /// Get Competitions (Leagues)
    /// </summary>
    getCompetitionsLeaguesPromise(){
        return this.GetPromise('/v3/csgo/stats/{format}/Competitions');
    }

    /// <summary>
    /// Get Games by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-01-13</code>, <code>2018-06-13</code>.</param>
    getGamesByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/csgo/stats/{format}/GamesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Memberships (Active)
    /// </summary>
    getMembershipsActivePromise(){
        return this.GetPromise('/v3/csgo/stats/{format}/ActiveMemberships');
    }

    /// <summary>
    /// Get Memberships (Historical)
    /// </summary>
    getMembershipsHistoricalPromise(){
        return this.GetPromise('/v3/csgo/stats/{format}/HistoricalMemberships');
    }

    /// <summary>
    /// Get Memberships by Team (Active)
    /// </summary>
    /// <param name="teamid">Unique FantasyData Team ID. Example:<code>100000001</code>.</param>
    getMembershipsByTeamActivePromise(teamid){
        var parameters = {};
        parameters['teamid']=teamid;
        return this.GetPromise('/v3/csgo/stats/{format}/MembershipsByTeam/{teamid}', parameters);
    }

    /// <summary>
    /// Get Memberships by Team (Historical)
    /// </summary>
    /// <param name="teamid">Unique FantasyData Team ID. Example:<code>100000001</code>.</param>
    getMembershipsByTeamHistoricalPromise(teamid){
        var parameters = {};
        parameters['teamid']=teamid;
        return this.GetPromise('/v3/csgo/stats/{format}/HistoricalMembershipsByTeam/{teamid}', parameters);
    }

    /// <summary>
    /// Get Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>100000576</code>.</param>
    getPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/csgo/stats/{format}/Player/{playerid}', parameters);
    }

    /// <summary>
    /// Get Players
    /// </summary>
    getPlayersPromise(){
        return this.GetPromise('/v3/csgo/stats/{format}/Players');
    }

    /// <summary>
    /// Get Players by Team
    /// </summary>
    /// <param name="teamid">Unique FantasyData Team ID. Example:<code>100000001</code>.</param>
    getPlayersByTeamPromise(teamid){
        var parameters = {};
        parameters['teamid']=teamid;
        return this.GetPromise('/v3/csgo/stats/{format}/PlayersByTeam/{teamid}', parameters);
    }

    /// <summary>
    /// Get Schedule
    /// </summary>
    /// <param name="roundid">Unique FantasyData Round ID. RoundIDs can be found in the Competitions and Competition Details endpoints. Examples: <code>100000138</code>, <code>1000001412</code>, etc</param>
    getSchedulePromise(roundid){
        var parameters = {};
        parameters['roundid']=roundid;
        return this.GetPromise('/v3/csgo/stats/{format}/Schedule/{roundid}', parameters);
    }

    /// <summary>
    /// Get Season Teams
    /// </summary>
    /// <param name="seasonid">Unique FantasyData Season ID. SeasonIDs can be found in the Competitions and Competition Details endpoints. Examples: <code>100000023</code>, <code>100000024</code>, etc</param>
    getSeasonTeamsPromise(seasonid){
        var parameters = {};
        parameters['seasonid']=seasonid;
        return this.GetPromise('/v3/csgo/stats/{format}/SeasonTeams/{seasonid}', parameters);
    }

    /// <summary>
    /// Get Teams
    /// </summary>
    getTeamsPromise(){
        return this.GetPromise('/v3/csgo/stats/{format}/Teams');
    }

    /// <summary>
    /// Get Venues
    /// </summary>
    getVenuesPromise(){
        return this.GetPromise('/v3/csgo/stats/{format}/Venues');
    }

    /// <summary>
    /// Get Standings
    /// </summary>
    /// <param name="roundid">Unique FantasyData Round ID. RoundIDs can be found in the Competitions and Competition Details endpoints. Example: <code>100000138</code>, etc</param>
    getStandingsPromise(roundid){
        var parameters = {};
        parameters['roundid']=roundid;
        return this.GetPromise('/v3/csgo/stats/{format}/Standings/{roundid}', parameters);
    }

}

module.exports = Csgov3StatsClient;

